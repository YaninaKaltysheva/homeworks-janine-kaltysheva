import { WinnersService, AuthService } from "./../services";

export class WinnersComponent {
  constructor() {
    this._winnersService = new WinnersService();
    this._authService = new AuthService();

    this.render = this.render.bind(this);
    this.beforeRender = this.beforeRender.bind(this);
  }

  async beforeRender() {
    const { winners } = await this._winnersService.getWinners();
    this._winnersList = winners.map(this._newTemplate);
  }

  render() {
    return `
      <div>${this._winnersList.join("")}</div>
    `;
  }

  _newTemplate(i) {
    return `
    <div class="part" style="width: 50%; margin: 30px auto; border: none;">
      <img src="${i.member_id.user_id.avatar}" class="part-img-top" style="border-radius: 50%;">
      <div class="part-one">
        <p class="part-name" style="text-align: center;">${i.member_id.user_id.full_name}</p>
      </div>
    </div>
    `;
  }
}
