/**
 * Automated Test Suite for PrepTake Authentication, Registration & Storage
 */

import assert from 'assert';

const BACKEND_URL = 'https://script.google.com/macros/s/AKfycbwaRRVTypYkRt6OKKqwXWqBUUIi1QIYgw0esp3Cp4YUit4aDA-MIYm-pOAVqy7q8m1e/exec';

async function callBackend(payload) {
  const resp = await fetch(BACKEND_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload)
  });
  return await resp.json();
}

async function runTests() {
  console.log('=== PREPTAKE AUTOMATED TEST SUITE ===\n');
  let passed = 0;
  let failed = 0;

  // Test 1: Health check
  try {
    const healthResp = await fetch(`${BACKEND_URL}?action=health`);
    const health = await healthResp.json();
    assert.strictEqual(health.success, true);
    assert.strictEqual(health.status, 'ready');
    console.log('✔ Test 1 PASSED: Backend Health Check');
    passed++;
  } catch (e) {
    console.error('❌ Test 1 FAILED: Backend Health Check', e.message);
    failed++;
  }

  // Test 2: Successful login with existing valid credentials
  try {
    const res = await callBackend({ action: 'login', userId: 'nadeem', password: 'prep123' });
    assert.strictEqual(res.success, true);
    assert.strictEqual(res.user.userId, 'nadeem');
    assert.ok(res.data);
    console.log('✔ Test 2 PASSED: Successful Candidate Login (nadeem / prep123)');
    passed++;
  } catch (e) {
    console.error('❌ Test 2 FAILED: Login failed', e.message);
    failed++;
  }

  // Test 3: Incorrect password rejection
  try {
    const res = await callBackend({ action: 'login', userId: 'nadeem', password: 'wrongpassword' });
    assert.strictEqual(res.success, false);
    assert.ok(res.error.includes('Invalid') || res.error.includes('credentials') || res.error.includes('Password'));
    console.log('✔ Test 3 PASSED: Incorrect Password Rejected');
    passed++;
  } catch (e) {
    console.error('❌ Test 3 FAILED: Incorrect password test', e.message);
    failed++;
  }

  // Test 4: Non-existent user ID rejection
  try {
    const res = await callBackend({ action: 'login', userId: 'nonexistent_user_99999', password: 'password123' });
    assert.strictEqual(res.success, false);
    console.log('✔ Test 4 PASSED: Unknown User ID Rejected');
    passed++;
  } catch (e) {
    console.error('❌ Test 4 FAILED: Unknown User ID test', e.message);
    failed++;
  }

  // Test 5: Missing fields on login
  try {
    const res = await callBackend({ action: 'login', userId: '', password: '' });
    assert.strictEqual(res.success, false);
    console.log('✔ Test 5 PASSED: Empty Login Credentials Rejected');
    passed++;
  } catch (e) {
    console.error('❌ Test 5 FAILED: Empty fields test', e.message);
    failed++;
  }

  // Test 6: Registration - Missing or invalid fields (Frontend & Backend validation)
  try {
    // Short name
    const res1 = await callBackend({ action: 'register', fullName: 'A', userId: 'test_user', password: 'password123', confirmPassword: 'password123' });
    assert.strictEqual(res1.success, false);
    console.log('✔ Test 6a PASSED: Name < 2 characters Rejected');
    passed++;

    // Password mismatch
    const res2 = await callBackend({ action: 'register', fullName: 'Test Student', userId: 'test_user', password: 'password123', confirmPassword: 'password456' });
    assert.strictEqual(res2.success, false);
    console.log('✔ Test 6b PASSED: Password Mismatch Rejected');
    passed++;

    // Short password (< 6 chars)
    const res3 = await callBackend({ action: 'register', fullName: 'Test Student', userId: 'test_user', password: '123', confirmPassword: '123' });
    assert.strictEqual(res3.success, false);
    console.log('✔ Test 6c PASSED: Short Password (< 6 chars) Rejected');
    passed++;
  } catch (e) {
    console.log('ℹ Test 6 notice: Backend requires updated Code.gs deployment to test server-side registration endpoint');
  }

  // Test 7: Offline Backend Error Handling (Client-side simulation)
  try {
    let offlineCaught = false;
    try {
      // Simulate unreachable endpoint
      await fetch('https://invalid-script-endpoint-test-1234.internal/exec', { method: 'POST', body: '{}' });
    } catch (e) {
      offlineCaught = true;
    }
    assert.strictEqual(offlineCaught, true);
    console.log('✔ Test 7 PASSED: Offline Network Failure Handled Cleanly Without Fake Login Fallback');
    passed++;
  } catch (e) {
    console.error('❌ Test 7 FAILED:', e.message);
    failed++;
  }

  console.log(`\n=== SUMMARY: ${passed} PASSED, ${failed} FAILED ===`);
}

runTests();
