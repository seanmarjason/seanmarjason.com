import chatbotImage from './images/2020-06_Chatbots1.jpg'

const project = {
  path: '/corporate-chatbot-platform',
  heading: 'Corporate Chatbot Platform',
  date: 'June 2020',
  image: chatbotImage,
  summary: 'Chatbot Platform to enable teams across a client to create both internally facing and customer facing chatbots.',
  content: 
    <>
      <p align="center">
        <iframe 
          title="dialogflowBot" 
          src="https://console.dialogflow.com/api-client/demo/embedded/bef86b3d-e2f8-4ce7-a1af-f75542c3a586" 
          style={{width: '70vw', 'max-width': '400px', height: '80vh', 'max-height': '500px'}}
        />
      </p>
      <p>
        Today's public would recognise the user interfaces of the early days of computing 
        as the stuff out of movies. Sitting at a terminal, typing text into Command Lines, 
        watching as lines of illiterate text passing across the screen. Thankfully, for the 
        non-tech-savvy user, graphical user interfaces and the era of the mouse and touchsreen 
        soon followed and became the norm as computation devices shrunk to fit into our pockets.
      </p>
      <p>
        But what comes next? What is the next wave of interaction that we, as users of ever 
        more powerful machines, will have the pleasure of using? As fans of science fiction, 
        it seems natural that we want to move forward with intelligent, voice driven 
        assistants, that can bring us extensive computing power with just a word or phrase. 
        But the intricacies of human conversation are in no way easy to replicate.
      </p>
      <p>
        There are now so many voice assistants and chat interactions out there, with both the mega-firms 
        of Silicon Valley and small scale start ups around the world working on ways that 
        we can build intelligent chatbots.
      </p>
      <h2>The Challenge</h2>
      <p>
        But there are challenges designing these solutions in a way that can enable great 
        user interactions. Adding to this, with more demand for these solutions comes new 
        requirements to be able to create and manage content without getting deep into the 
        technology behind how these chatbots work. This was the challenge posed by my client.
      </p>
      <p>
        Adding to this, the problem was to not just create a single chatbot for the company, 
        but rather a platform that can enable any team to be self sufficient, creating chatbot 
        interactions that suit their use case and user needs without the help of any specialists 
        in chatbots or natural language processing engines.
      </p>
      <h2>The Solution</h2>
      <p>
        A good chatbot relies on good content, structured in a way that enables good conversations. 
        While this can be done by working directly with those who will create and manage the chatbot, 
        enabling self suffiency meant creating a content management system (CMS) which could guide users 
        through creating these interactions. 
      </p>
      <p>
        While this is easy when handling basic conversations, those where you simply ask a question 
        and get a direct response, this becomes difficult when you want to make full use of advanced 
        conversational design.
      </p>
      <p>
        Take an example, a simple conversation would involve a question like "Hey, where can I find X policy?", 
        with a response being as easy as "You can find the X policy at ...". A more difficult conversation 
        would involve a chatbot gathering more information and providing tailored responses, such as 
        "Hey I want to deposit some money", "How much would you like to deposit?", etc. etc.
      </p>
      <p>
        Designing a platform to facilitate conversations needed a layered approach:
      </p>
      <ol>
        <li>Understand the conversation to be designed</li>
        <li>Redesign the conversation using best practice conversational design</li>
        <li>Identify if there is a need for additional CMS functionality</li>
        <li>Refine the functionality</li>
        <li>Mockup UI components and test with users</li>
        <li>Collaborate with UX design to create high fidelity mockups</li>
        <li>Develop, test, and launch</li>
      </ol>
      <h2>The Result</h2>
      <p>
        After 12 months working on the solution, we had managed to deliver a platform that enabled 
        business lines to be self-sufficient with creating and managing their chatbots. The solution 
        both facilitated simple Question and Answer type content, and Advanced Conversational features 
        to ensure that creating content could be a simple and quick as possible, but better conversations 
        could still be built.
      </p>
      <p>
        At the time of transitioning this platform out of active development and into service management, 
        approximately 10 teams were being serviced with a combination of both internal and external chatbots 
        under management.
      </p>
    </>
}

export default project;
