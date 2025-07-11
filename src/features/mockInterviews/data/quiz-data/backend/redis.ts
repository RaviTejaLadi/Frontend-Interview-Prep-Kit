import { Question } from '@/features/mockInterviews/types/questions';

export const redisQuestions: Question[] = [
  {
    id: 1,
    question: 'What is Redis?',
    code: '',
    options: ['A relational database', 'An in-memory key-value store', 'A document database', 'A graph database'],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: 'What does Redis stand for?',
    code: '',
    options: [
      'Remote Dictionary Server',
      'Relational Direct Storage',
      'Rapid Entry Database System',
      "Redis doesn't stand for anything",
    ],
    correctAnswer: 0,
  },
  {
    id: 3,
    question: 'Which of these is NOT a Redis data type?',
    code: '',
    options: ['String', 'Hash', 'Table', 'Sorted Set'],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: 'What is the maximum key size in Redis?',
    code: '',
    options: ['128 bytes', '512 MB', 'There is no practical limit', '1 KB'],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: 'How does Redis achieve persistence?',
    code: '',
    options: ['RDB snapshots', 'AOF (Append Only File)', 'Both RDB and AOF', "Redis doesn't support persistence"],
    correctAnswer: 2,
  },
  {
    id: 6,
    question: 'What is Redis replication?',
    code: '',
    options: [
      'Copying data to another Redis instance',
      'Creating database backups',
      'Partitioning data across multiple nodes',
      'Compressing stored data',
    ],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: 'What is Redis Sentinel?',
    code: '',
    options: [
      'A monitoring system for Redis',
      'A high-availability solution',
      'A failover management system',
      'All of the above',
    ],
    correctAnswer: 3,
  },
  {
    id: 8,
    question: 'What is Redis Cluster?',
    code: '',
    options: [
      'A way to shard data across multiple Redis nodes',
      'A group of Redis servers',
      'A backup solution',
      'A load balancing mechanism',
    ],
    correctAnswer: 0,
  },
  {
    id: 9,
    question: 'What is the default Redis port?',
    code: '',
    options: ['3306', '5432', '6379', '27017'],
    correctAnswer: 2,
  },
  {
    id: 10,
    question: 'What is the command to set a key-value pair in Redis?',
    code: '',
    options: ['PUT key value', 'SET key value', 'STORE key value', 'ADD key value'],
    correctAnswer: 1,
  },
  {
    id: 11,
    question: 'What is the command to get all keys matching a pattern?',
    code: '',
    options: ['FIND pattern', 'SEARCH pattern', 'KEYS pattern', 'GET pattern'],
    correctAnswer: 2,
  },
  {
    id: 12,
    question: 'What is a Redis pipeline?',
    code: '',
    options: [
      'A way to execute multiple commands in a single round trip',
      'A data transfer protocol',
      'A backup strategy',
      'A clustering technique',
    ],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: 'What is Redis transactions?',
    code: '',
    options: [
      'A way to group commands that are executed sequentially',
      'A banking feature',
      'A data migration tool',
      'A backup mechanism',
    ],
    correctAnswer: 0,
  },
  {
    id: 14,
    question: 'What is the command to start a transaction in Redis?',
    code: '',
    options: ['BEGIN', 'START', 'MULTI', 'TRANSACTION'],
    correctAnswer: 2,
  },
  {
    id: 15,
    question: 'What is Redis Lua scripting used for?',
    code: '',
    options: [
      'To execute complex operations atomically',
      'To configure Redis settings',
      'To create stored procedures',
      'To write Redis plugins',
    ],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: 'What is Redis eviction policy?',
    code: '',
    options: [
      'Rules for removing keys when memory is full',
      'A security policy',
      'A replication strategy',
      'A backup schedule',
    ],
    correctAnswer: 0,
  },
  {
    id: 17,
    question: 'Which of these is a Redis eviction policy?',
    code: '',
    options: ['allkeys-lru', 'volatile-random', 'noeviction', 'All of the above'],
    correctAnswer: 3,
  },
  {
    id: 18,
    question: 'What is Redis Pub/Sub?',
    code: '',
    options: ['A publish/subscribe messaging paradigm', 'A backup system', 'A clustering protocol', 'A data structure'],
    correctAnswer: 0,
  },
  {
    id: 19,
    question: 'What is Redis benchmarking tool called?',
    code: '',
    options: ['redis-bench', 'redis-test', 'redis-check', 'redis-perf'],
    correctAnswer: 0,
  },
  {
    id: 20,
    question: 'What is Redis GEO used for?',
    code: '',
    options: [
      'Geospatial data storage and queries',
      'Geographical replication',
      'Global load balancing',
      'Graph database operations',
    ],
    correctAnswer: 0,
  },
  {
    id: 21,
    question: 'What is Redis Streams?',
    code: '',
    options: [
      'A data structure for log-like data',
      'A video streaming feature',
      'A data migration tool',
      'A replication protocol',
    ],
    correctAnswer: 0,
  },
  {
    id: 22,
    question: 'What is the command to delete a key in Redis?',
    code: '',
    options: ['REMOVE key', 'DELETE key', 'DEL key', 'ERASE key'],
    correctAnswer: 2,
  },
  {
    id: 23,
    question: 'What is the command to check if a key exists?',
    code: '',
    options: ['EXISTS key', 'HAS key', 'CHECK key', 'FIND key'],
    correctAnswer: 0,
  },
  {
    id: 24,
    question: 'What is the command to set an expiration time for a key?',
    code: '',
    options: ['TTL key seconds', 'EXPIRE key seconds', 'TIMEOUT key seconds', 'SETEX key seconds'],
    correctAnswer: 1,
  },
  {
    id: 25,
    question: 'What is the command to get remaining time to live of a key?',
    code: '',
    options: ['GETTTL key', 'TTL key', 'LIFETIME key', 'EXPIREAT key'],
    correctAnswer: 1,
  },
  {
    id: 26,
    question: 'What is Redis HyperLogLog?',
    code: '',
    options: [
      'A probabilistic data structure for counting unique items',
      'A logging system',
      'A replication protocol',
      'A performance monitoring tool',
    ],
    correctAnswer: 0,
  },
  {
    id: 27,
    question: 'What is Redis BITCOUNT used for?',
    code: '',
    options: [
      'Counting set bits in a string',
      'Counting keys in a database',
      'Counting connected clients',
      'Counting memory usage',
    ],
    correctAnswer: 0,
  },
  {
    id: 28,
    question: 'What is Redis SCAN used for?',
    code: '',
    options: [
      'Incrementally iterating over keys',
      'Scanning for corrupted data',
      'Checking server health',
      'Monitoring performance',
    ],
    correctAnswer: 0,
  },
  {
    id: 29,
    question: 'What is Redis ACL?',
    code: '',
    options: ['Access Control List for security', 'A clustering protocol', 'A backup format', 'A data structure'],
    correctAnswer: 0,
  },
  {
    id: 30,
    question: 'What is Redis Module System?',
    code: '',
    options: ['A way to extend Redis functionality', 'A clustering mechanism', 'A backup system', 'A monitoring tool'],
    correctAnswer: 0,
  },
];
