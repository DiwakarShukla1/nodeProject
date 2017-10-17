import orm from 'orm';

let Profile;

const startSql = async () => {
    orm.connectAsync('mysql://root:roxiler@localhost/test')
    .then((db)=> {
        Profile = db.define("profile", {
            name : String,
            email: String
        });

        return [Profile, db.dropAsync()];
    })
    .spread(function(Profile) {
        return Profile.syncPromise();
    })
    .then(function () {
        console.log("Table Created");
    });
};

const getProfile = async (id) => {
    return await Profile.oneAsync({ id });
};

const createProfile = async (newProfile) => {
    const profile =  await getProfile(newProfile.id);
    
    if (profile) {
        profile.name = newProfile.name;
        profile.email = newProfile.email;
        await profile.saveAsync();
        return profile;
    } else {
        return await Profile.createAsync(newProfile);
    }
};

export { startSql, createProfile, getProfile };