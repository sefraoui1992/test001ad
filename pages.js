var VERIFY_TOKEN = "123456";
var PAGES = [
	// Add your pages here, change key for each one, I use numberical values starting at 0
    {
        id: "619915325180106",
        name: "test001",
        key: "0",
        title: "It's a brand new day, let's continue our adventure!",
        subtitle: "Your Friends are playing...",
        cta: "Play Now",
        imageurl: "https://www.cmo4hire.com/wp-content/uploads/2016/10/Blog-background-hello-world.jpg",
        payload: null,
        pat: "EAAP4UambgGQBACipAtq9FFJv3nLGub1PQfFpSPIvOdj6y5pZA9Jc2oVZCPfVZBvY2E7MD3JPPRX9iiNRgHE9N8tZAegZChZAF1ZAOZC6khJ1HfaeDTZAtFowCQWfhYfjZC2Maz2BFsZBECQDqy4upr1OkdooTHHi3jA1AXA1v81AZCHRyxX2EaM9snxM",
    },
	




 
];

function GetGame(page_id)
{
	for (var t = 0; t < PAGES.length; t++)
	{
		if (page_id === PAGES[t].id)
			return PAGES[t];
	}
}

function GetPage(which)
{
	return PAGES[which];
}

function GetVertifyToken()
{
	return VERIFY_TOKEN;
}

module.exports = 
{
	GetGame,
	GetPage,
	GetVertifyToken,
};
