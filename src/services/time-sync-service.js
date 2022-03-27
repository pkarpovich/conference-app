const url = "https://worldtimeapi.org/api/timezone/Etc/UTC";

export class TimeSyncService {
  static async getGlobalTime() {
    let data;

    try {
      data = await fetch(url).then((resp) => resp.json());
    } catch (e) {
      console.error(e);
      return;
    }

    const { unixtime } = data;

    return unixtime * 1000;
  }
}
