import { decorate, observable } from "mobx";
import { instance } from "./instance";

class ProfileStore {
  profile = [];
  loading = true;

  fetchProfileData = async () => {
    try {
      const res = await instance.get("api/profile/");
      const profile = res.data;
      this.profile = profile;
      this.loading = false;
    } catch (err) {
      console.log("something went wrong fetching the data");
    }
  };
}

decorate(ProfileStore, {
  profile: observable,
  loading: observable
});

const profileStore = new ProfileStore();

export default profileStore;
