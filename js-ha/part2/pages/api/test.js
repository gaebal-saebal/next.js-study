export default function handler(요청, 응답) {
  console.log(요청.query);
  if (요청.method == 'GET') {
    응답.status(200).json({ name: '안녕' });
  }
  if (요청.method == 'POST') {
    응답.status(200).json({ name: '수정' });
  }
}
