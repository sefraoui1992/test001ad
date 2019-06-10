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
        pat: "EAAP4UambgGQBAM76fiwIjZCIYoJeDgFa5ei4keMRfTZCMfdb1f4sOpCLuFvupl3eCbXWgsHFW6fsbvKFrBvyHlbqKWim0kuWNVkxzcHg8GkbVAEDrQKUcAXqhVVGeAbtOJt0VnVznWx3b2IR0JRkwLmkWTVgJwp6My6npeCzWRJaZCsrfCc",
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
