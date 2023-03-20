export default async function handler(request, res) {

    const roster = [
      {
        "profilepicture": "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        "name": "John Appleseed",
        "major": "Cybersecurity",
        "school": "Penn State",
        "skills": "Really Fast",
        "workexperience": "Touring Musician",
        "relativeschoolwork": "Coding",
        "infotag": "Info",
        "newColor": "null",
        "shadowEnable": "false",
        "opened": "false"
      }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(roster);
  }