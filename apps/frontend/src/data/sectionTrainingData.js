import seashellCookie from "../assests/seashellCookie.png";
import multiCookie from "../assests/multiCookie.png";

const sectionTrainingData = {
    pages: [
        {
            message:[" Cookie Monster has 2 cookies. Can Big Bird also have 2 cookies? Which tray has 2 cookies? Green? or purple?"],
            message1:["Cookie Monster has 2 cookies. Let's count together!"],
            message2:["Can Big Bird also have 2 cookies? Which tray has 2 cookies? Green? or purple?"],
            cookies: [
              {
                id: 1,
                img: seashellCookie,
                top: "50px",
                left: "20px",
              },
              {
                id: 2,
                img: seashellCookie,
                top: "200px",
                left: "120px",
              },
            ],
            greenTray: [
              {
                biscuits: [
                  {
                    id: 1,
                    img: multiCookie,
                    top: "140px",
                    left: "80px",
                  },
                  {
                    id: 2,
                    img: multiCookie,
                    top: "220px",
                    left: "160px",
                  },
                ],
              },
            ],
            purpleTray: [
              {
                biscuits: [
                  {
                    id: 1,
                    img: multiCookie,
                    top: "220px",
                    left: "160px",
                  },
                ],
              },
            ],
          },
          {
            message:[" Cookie Monster has 1 cookie. Can Big Bird also have 1 cookie? Which tray has 1 cookie? Green? or purple?"],
            message1:["Cookie Monster has 1 cookie. Let's count together!"],
            message2:["Can Big Bird also have 1 cookie? Which tray has 1 cookie? Green? or purple?"],
            cookies: [
              {
                id: 1,
                img: seashellCookie,
                top: "170px",
                left: "90px",
              },
            ],
            greenTray: [
              {
                biscuits: [
                  {
                    id: 1,
                    img: multiCookie,
                    top: "140px",
                    left: "80px",
                  },
                  {
                    id: 2,
                    img: multiCookie,
                    top: "80px",
                    left: "160px",
                  },
                ],
              },
            ],
            purpleTray: [
              {
                biscuits: [
                  {
                    id: 1,
                    img: multiCookie,
                    top: "80px",
                    left: "160px",
                  },
                ],
              },
            ],
          },
    ]
};

export default sectionTrainingData;