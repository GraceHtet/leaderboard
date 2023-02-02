class Fun {
  constructor() {
    this.scores = JSON.parse(localStorage.getItem('scores')) || [];
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ThiORKokoEkrMIO/scores';
  }

  apiRecall = async () => {
    const req = new Request(this.url);
    const res = await fetch(req);
    const { result } = await res.json();
    const scrs = result.map(({ user: name, score }) => ({
      name,
      score,
    }));

    return scrs;
  };

  show = async () => {
    this.scores = await this.apiRecall();
    const dataShow = document.querySelector('tbody');
    dataShow.innerHTML = '';
    this.scores.forEach((scr) => {
      dataShow.innerHTML += `<tr class="show">
            <td>
              <span class="name">${Fun.capitalize(
        scr.name,
      )}</span>:<span class="score">${scr.score}</span>
            </td>
          </tr>
          `;
    });
  };

  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  add = async (name, score) => {
    const res = new Request(this.url);
    await fetch(res, {
      method: 'POST',
      body: JSON.stringify({ user: name, score }),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    });
    this.scores.push({ name, score });
    localStorage.setItem('scores', JSON.stringify(this.scores));
  };
}

export default Fun;
