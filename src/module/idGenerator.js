const idGenerator = async () => {
  const cUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

  const action = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'game one',
    }),
  };
  const idGen = await fetch(`${cUrl}`, action);
  const res = await idGen.json();
  const ans = await res.result;

  return ans;
};

export default idGenerator;
