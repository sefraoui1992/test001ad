var VERIFY_TOKEN = "123456";
var PAGES = [
	// Add your pages here, change key for each one, I use numberical values starting at 0
    {
        id: "305341463683530",
        name: "test001",
        key: "0",
        title: "It's a brand new day, let's continue our adventure!",
        subtitle: "Your Friends are playing...",
        cta: "Play Now",
        imageurl: "https://www.cmo4hire.com/wp-content/uploads/2016/10/Blog-background-hello-world.jpg",
        payload: null,
        pat: "EAAE1UZA9r8KkBAEkznlgZBufHaNRyzlWKR0NbfzxjSQ8JwD8EJg5D9ZCg7zKYnMMAGzEev7P2obE4P51m5UbhJ7t9CErtQVJbKnzXkJ2j7BpxedXZC2q4ItDnfJuNeKtJjIX8F3sTTuLEqZAXcwdPQY720rQgEZCMi6XDkPVEqZCuAOgbsZB3twmLyrL5ZCiW32QZD",
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
