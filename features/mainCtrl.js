module.exports = {

  getName: ( req, res ) => {

  },
  getLocation: (req, res) => {

  },
  getOccupations: (req, res) => {

  },
  getLatestOccupations: (req, res) => {

  },
  getHobbies: (req, res) => {

  },
  getHobiesByType: (req, res) => {

  }
  
};

const users = [
  {
    "name": "Donald Duck",
    "location": "Timbuktu",
    "occupations": ["Thwarting Buggs Bunny", "Tomfoolery"],
    "hobbies": [
      {
        "name": "Watching Cartoons",
        "type": "current"
      },
      {
        "name": "Quacking",
        "type": "past"
      }
    ]
  }
]
