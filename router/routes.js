const router = require('express').Router()
const { Configuration, OpenAIApi } = require("openai");
const showdown   = require('showdown');
converter = new showdown.Converter();
const chat = async(req,res)=>{
    const configuration = new Configuration({
        apiKey:'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',
      });
      const openai = new OpenAIApi(configuration);
   try {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: req.body.text,
        temperature: 0,
        max_tokens: 1000,
      });
    //   console.log(response)
      let html = converter.makeHtml(response.data.choices[0].text)
      res.json({
        markdown:html,
        text:response.data.choices[0].text
      })
   } catch (error) {
      res.send({message:"ulangi"})
   }
}


router.get('/',(req,res)=>{
res.render('index')
})

router.post('/chatbot',chat);

module.exports = router

