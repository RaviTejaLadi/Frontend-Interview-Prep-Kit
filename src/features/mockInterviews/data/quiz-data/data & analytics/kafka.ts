import { Question } from '@/features/mockInterviews/types/questions';

export const kafkaQuestions: Question[] = [
  {
    id: 31,
    question: 'What is Apache Kafka?',
    code: '',
    options: [
      'A distributed streaming platform',
      'A database management system',
      'A programming language',
      'A web server',
    ],
    correctAnswer: 0,
  },
  {
    id: 32,
    question: 'What is a topic in Kafka?',
    code: '',
    options: [
      'A category or feed name to which records are published',
      'A type of consumer',
      'A network protocol',
      'A security feature',
    ],
    correctAnswer: 0,
  },
  {
    id: 33,
    question: 'What is a partition in Kafka?',
    code: '',
    options: [
      'A way to parallelize topics by splitting data',
      'A disk storage format',
      'A network segmentation',
      'A security boundary',
    ],
    correctAnswer: 0,
  },
  {
    id: 34,
    question: 'What is a Kafka broker?',
    code: '',
    options: ['A server in the Kafka cluster', 'A type of producer', 'A message format', 'A compression algorithm'],
    correctAnswer: 0,
  },
  {
    id: 35,
    question: 'What is the role of ZooKeeper in Kafka?',
    code: '',
    options: [
      'To manage cluster metadata and controller election',
      'To store message data',
      'To handle client connections',
      'To perform message compression',
    ],
    correctAnswer: 0,
  },
  {
    id: 36,
    question: 'What is a consumer group in Kafka?',
    code: '',
    options: [
      'A set of consumers that work together to consume data',
      'A security group for access control',
      'A collection of topics',
      'A type of producer',
    ],
    correctAnswer: 0,
  },
  {
    id: 37,
    question: 'What is the purpose of offsets in Kafka?',
    code: '',
    options: [
      'To track the position of consumers in partitions',
      'To measure network latency',
      'To balance load across brokers',
      'To compress messages',
    ],
    correctAnswer: 0,
  },
  {
    id: 38,
    question: 'What is the retention period in Kafka?',
    code: '',
    options: [
      'How long messages are kept before deletion',
      'How long consumers can be idle',
      'How long brokers maintain connections',
      'How long ZooKeeper keeps metadata',
    ],
    correctAnswer: 0,
  },
  {
    id: 39,
    question: 'What is the role of the Kafka producer?',
    code: '',
    options: [
      'To publish data to topics',
      'To consume data from topics',
      'To manage the cluster',
      'To monitor performance',
    ],
    correctAnswer: 0,
  },
  {
    id: 40,
    question: 'What is the role of the Kafka consumer?',
    code: '',
    options: [
      'To read data from topics',
      'To publish data to topics',
      'To manage partitions',
      'To elect the controller',
    ],
    correctAnswer: 0,
  },
  {
    id: 41,
    question: 'What is the purpose of replication in Kafka?',
    code: '',
    options: ['To provide fault tolerance', 'To increase message size', 'To encrypt messages', 'To compress data'],
    correctAnswer: 0,
  },
  {
    id: 42,
    question: 'What is an ISR in Kafka?',
    code: '',
    options: [
      'In-Sync Replicas - replicas that are up-to-date with the leader',
      'Internal System Resource',
      'Indexed Search Repository',
      'Integrated Security Role',
    ],
    correctAnswer: 0,
  },
  {
    id: 43,
    question: 'What is the purpose of the controller in a Kafka cluster?',
    code: '',
    options: [
      'To manage partition leaders and cluster state',
      'To handle all producer requests',
      'To store all messages',
      'To monitor consumer lag',
    ],
    correctAnswer: 0,
  },
  {
    id: 44,
    question: 'What is the significance of the leader for a partition?',
    code: '',
    options: [
      'It handles all read/write requests for the partition',
      `It's the oldest replica`,
      `It's the only one that communicates with ZooKeeper`,
      'It compresses all messages',
    ],
    correctAnswer: 0,
  },
  {
    id: 45,
    question: 'What is consumer lag in Kafka?',
    code: '',
    options: [
      'The difference between the latest offset and consumer offset',
      'Network latency between consumer and broker',
      'Time delay in message production',
      'Delay in replica synchronization',
    ],
    correctAnswer: 0,
  },
  {
    id: 46,
    question: 'What is the purpose of the __consumer_offsets topic?',
    code: '',
    options: [
      'To store consumer offsets',
      'To track producer metrics',
      'To manage broker health',
      'To store schema information',
    ],
    correctAnswer: 0,
  },
  {
    id: 47,
    question: 'What is the difference between a Kafka topic and a database table?',
    code: '',
    options: [
      'Topics are append-only logs, tables support CRUD operations',
      'Tables are faster than topics',
      'Topics support SQL queries',
      'There is no difference',
    ],
    correctAnswer: 0,
  },
  {
    id: 48,
    question: 'What is the purpose of the acks setting in Kafka producer?',
    code: '',
    options: [
      'To control when the producer considers a message sent',
      'To encrypt messages',
      'To compress data',
      'To authenticate with the broker',
    ],
    correctAnswer: 0,
  },
  {
    id: 49,
    question: 'What is a compacted topic in Kafka?',
    code: '',
    options: [
      'A topic that retains only the latest value for each key',
      'A topic with compressed messages',
      'A topic with a small number of partitions',
      'A topic with short retention time',
    ],
    correctAnswer: 0,
  },
  {
    id: 50,
    question: 'What is the purpose of the group.id in Kafka consumer?',
    code: '',
    options: [
      'To identify the consumer group',
      'To authenticate with the broker',
      'To select which topics to consume',
      'To determine the polling interval',
    ],
    correctAnswer: 0,
  },
  {
    id: 51,
    question: 'What is the role of the Schema Registry in Kafka?',
    code: '',
    options: [
      'To manage schemas for message serialization',
      'To track consumer offsets',
      'To monitor broker health',
      'To manage topic creation',
    ],
    correctAnswer: 0,
  },
  {
    id: 52,
    question: 'What is the purpose of the auto.offset.reset setting in Kafka consumer?',
    code: '',
    options: [
      'To determine behavior when no offset is found',
      'To automatically reset offsets periodically',
      'To handle broker failures',
      'To manage consumer rebalancing',
    ],
    correctAnswer: 0,
  },
  {
    id: 53,
    question: 'What is the difference between Kafka and traditional message queues?',
    code: '',
    options: [
      'Kafka persists messages and allows multiple consumers',
      'Traditional queues are faster',
      `Kafka doesn't support multiple consumers`,
      'Traditional queues have better ordering guarantees',
    ],
    correctAnswer: 0,
  },
  {
    id: 54,
    question: 'What is the purpose of the log.segment.bytes setting in Kafka?',
    code: '',
    options: [
      'To control the size of segment files',
      'To limit message size',
      'To control retention time',
      'To manage network buffers',
    ],
    correctAnswer: 0,
  },
  {
    id: 55,
    question: 'What is the role of the key in a Kafka message?',
    code: '',
    options: [
      'To determine the partition and for compaction',
      'To encrypt the message',
      'To track message age',
      'To compress the message',
    ],
    correctAnswer: 0,
  },
  {
    id: 56,
    question: 'What is the purpose of the min.insync.replicas setting?',
    code: '',
    options: [
      'To define the minimum replicas that must acknowledge writes',
      'To control consumer parallelism',
      'To limit producer throughput',
      'To manage ZooKeeper connections',
    ],
    correctAnswer: 0,
  },
  {
    id: 57,
    question: 'What is a Kafka connector?',
    code: '',
    options: [
      'A tool to integrate Kafka with other systems',
      'A network component between brokers',
      'A type of producer',
      'A security feature',
    ],
    correctAnswer: 0,
  },
  {
    id: 58,
    question: 'What is the purpose of the replica.fetch.max.bytes setting?',
    code: '',
    options: [
      'To control the size of messages replicas can receive',
      'To limit producer message size',
      'To control consumer fetch size',
      'To manage ZooKeeper data',
    ],
    correctAnswer: 0,
  },
  {
    id: 59,
    question: 'What is the role of the transaction coordinator in Kafka?',
    code: '',
    options: [
      'To manage transactional producers',
      'To handle consumer offsets',
      'To balance partition leaders',
      'To monitor broker health',
    ],
    correctAnswer: 0,
  },
  {
    id: 60,
    question: 'What is the purpose of the linger.ms setting in Kafka producer?',
    code: '',
    options: [
      'To wait for additional messages before sending a batch',
      'To delay message consumption',
      'To control replica synchronization',
      'To manage network timeouts',
    ],
    correctAnswer: 0,
  },
];
