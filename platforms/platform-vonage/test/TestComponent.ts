import { BaseComponent, Component, Global, Intents } from '@jovotech/framework';
import { TalkActionOutput } from '../src/output/templates/TalkActionOutput';

@Global()
@Component()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class TestComponent extends BaseComponent {
  async LAUNCH() {
    return this.$send('welcome');
  }

  bot() {
    return this.$send({ message: `bot` });
  }

  goodbye() {
    return this.$send({ message: `goodbye`, listen: false });
  }

  empty() {
    return;
  }

  silence() {
    return this.$send('silence');
  }

  barge() {
    return this.$send(TalkActionOutput, {
      message: `barge`,
      bargeIn: true,
    });
  }
}
