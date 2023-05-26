import { MongoClient } from 'mongodb';
const url = `mongodb+srv://${process.env.NEXT_PUBLIC_CREDENTIAL}@cluster0.r0h2e3i.mongodb.net/?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true };
let connectDB;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect(); // 변수에 저장해놓고 사용하면 매번 실행안되고 좋음
}
export { connectDB };
