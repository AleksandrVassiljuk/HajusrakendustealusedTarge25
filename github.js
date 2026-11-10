
let givenProfile = "";
let profileName = "";
let profileId = "";
let profileLink = "";
let profileRepos = "";

let fetchProfile = async () => {
    try {
        let fetchedData;

        if (profileName != "") {
            fetchedData = await fetch(`https://api.github.com/users/${profileName}`);
            let data = await fetchedData.json();

            givenProfile = data;
            profileId = data.id;
            profileLink = data.html_url;
            profileRepos = data.public_repos;

            console.log(data);
        }
    } catch (error) {
        console.log(error);
    }
};
