import Apify from 'apify';

Apify.main(async () => {
    const input = await Apify.getInput();
    await Apify.metamorph('lukaskrivka/article-extractor-smart', {
        ...input,
        
        proxy: {
            "useApifyProxy": true,
        },
    });
});