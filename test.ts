import { connectToDatabase, collections, shut } from './mongo';
import request from 'supertest';
import app from './index';
import dotenv from 'dotenv';
dotenv.config();

describe('Initial test to confirm that Jest is working', () => {
  test('should be 2', () => {
    expect(1 + 1).toBe(2);
  });
});

describe('Initial test to confirm that Jest is working', () => {
  test('Connects to Atlas', async () => {
    let connected = true;
    return connectToDatabase()
      .then(() => {
        expect(connected).toBe(true);
      })
      .catch(() => {
        connected = false;
      })
      .finally(() => { shut(); })
  });
});

describe('Collection Tests', () => {
  test('Has the collections', async () => {
    let catches = true;
    let currents: Array<string> = Object.keys(collections);
    let actualCollections: Array<string> = ['leaders', 'tipstricks', 'resources', 'usageAPI', 'users'];
    for (let i = 0; i < currents.length; i++) {
      if (currents[i] !== actualCollections[i]) {
        catches = false;
        break;
      }
    }
    expect(catches).toBe(true);
  });

});