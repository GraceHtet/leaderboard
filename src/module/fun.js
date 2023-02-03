class Fun {
  constructor() {
    this.scores = JSON.parse(localStorage.getItem('scores')) || [];
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/iRt0XJ5I1q1NWqAQJmZf/scores';
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

    const srtArrs = [];
    Fun.sortedArr(this.scores, srtArrs);
    
    const dataShow = document.querySelector('tbody');
    dataShow.innerHTML = '';
    srtArrs.forEach((srtarr) => {
      dataShow.innerHTML += `<tr class="show">
            <td>
              <span class="name">${Fun.capitalize(
        srtarr.name,
      )}</span>:<span class="score">${srtarr.score}</span>
            </td>
          </tr>
          `;
    });
  };

  static capitalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  static sortedArr(scores, srtArr) {
    const userScrs = scores.map((user) => user.score).sort((a, b) => b - a);

    userScrs.forEach((userscr) => {
      scores.forEach((scr) => {
        if (scr.score === userscr) srtArr.push(scr);
      });
    });
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
