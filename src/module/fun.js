class Fun {
  constructor() {
    this.scores = JSON.parse(localStorage.getItem('scores')) || [];
  }

  show() {
    const dataShow = document.querySelector('tbody');
    dataShow.innerHTML = '';
    this.scores.forEach((scr) => {
      dataShow.innerHTML += `<tr class="show">
            <td>
              <span class="name">${scr.name}</span>:<span class="score">${scr.score}</span>
            </td>
          </tr>
          `;
    });
  }

  add(name, score) {
    this.scores.push({ name, score });
    localStorage.setItem('scores', JSON.stringify(this.scores));
  }
}

export default Fun;
