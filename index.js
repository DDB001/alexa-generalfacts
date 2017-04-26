/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en-GB': {
        translation: {
            FACTS: [
                'A year on Mercury is just 88 days long.',
                'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
                'Venus rotates anti-clockwise, possibly because of a collision in the past with an asteroid.',
                'On Mars, the Sun appears about half the size as it does on Earth.',
                'Earth is the only planet not named after a god.',
                'Jupiter has the shortest day of all the planets.',
                'The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.',
                'The Sun contains 99.86% of the mass in the Solar System.',
                'Cerebrum. The cerebrum is the largest part of the brain and makes up 85% of the brain’s weight.',
                'Skin. Your skin weighs twice as much as your brain.',
                'Gray matter. The brain’s gray matter is made up of neurons, which gather and transmit signals.',
                'White matter. The white matter is made up of dendrites and axons, which create the network by which neurons send their signals.',
                'Gray and white. Your brain is 60% white matter and 40% gray matter.',
                'Water. The brain is made up of about 75% water.',
                'Neurons. Your brain consists of about 100 billion neurons.',
                'Synapses. There are anywhere from 1,000 to 10,000 synapses for each neuron.',
                'No pain. There are no pain receptors in the brain, so the brain can feel no pain.',
                'Largest brain. While an elephant’s brain is physically larger than a human brain, the human brain is 2% of total body weight compared to 0.15% of an elephant’s brain, meaning humans have the largest brain to body size.',
                'Blood vessels. There are 100,000 miles of blood vessels in the brain.',
                'Fat. The human brain is the fattest organ in the body and may consists of at least 60% fat.',
                'Neurons. Neurons develop at the rate of 250,000 neurons per minute during early pregnancy.',
                'Size at birth. At birth, your brain was almost the same size as an adult brain and contained most of the brain cells for your whole life.',
                'Newborn’s growth. A newborn baby’s brain grows about three times its size in the first year.',
                'Stopped growing. Your brain stopped growing at age 18.',
                'The Sun is an almost perfect sphere.',
                'Brain waves. Studies show that brain waves are more active while dreaming than when you are awake.',
                'Lost dreams. Five minutes after a dream, half of the dream is forgotten. Ten minutes after a dream, over 90% is forgotten. Write down your dreams immediately if you want to remember them.',
                'Blind people dream. Dreams are more than just visual images, and blind people do dream. Whether or not they dream in pictures depends on if they were born blind or lost their vision later.'.
            ],
            SKILL_NAME: 'General Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'A year on Mercury is just 88 days long.',
                'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
                'Venus rotates anti-clockwise, possibly because of a collision in the past with an asteroid.',
                'On Mars, the Sun appears about half the size as it does on Earth.',
                'Earth is the only planet not named after a god.',
                'Jupiter has the shortest day of all the planets.',
                'The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.',
                'The Sun contains 99.86% of the mass in the Solar System.',
                'Cerebrum. The cerebrum is the largest part of the brain and makes up 85% of the brain’s weight.',
                'Skin. Your skin weighs twice as much as your brain.',
                'Gray matter. The brain’s gray matter is made up of neurons, which gather and transmit signals.',
                'White matter. The white matter is made up of dendrites and axons, which create the network by which neurons send their signals.',
                'Gray and white. Your brain is 60% white matter and 40% gray matter.',
                'Water. The brain is made up of about 75% water.',
                'Neurons. Your brain consists of about 100 billion neurons.',
                'Synapses. There are anywhere from 1,000 to 10,000 synapses for each neuron.',
                'No pain. There are no pain receptors in the brain, so the brain can feel no pain.',
                'Largest brain. While an elephant’s brain is physically larger than a human brain, the human brain is 2% of total body weight compared to 0.15% of an elephant’s brain, meaning humans have the largest brain to body size.',
                'Blood vessels. There are 100,000 miles of blood vessels in the brain.',
                'Fat. The human brain is the fattest organ in the body and may consists of at least 60% fat.',
                'Neurons. Neurons develop at the rate of 250,000 neurons per minute during early pregnancy.',
                'Size at birth. At birth, your brain was almost the same size as an adult brain and contained most of the brain cells for your whole life.',
                'Newborn’s growth. A newborn baby’s brain grows about three times its size in the first year.',
                'Stopped growing. Your brain stopped growing at age 18.',
                'The Sun is an almost perfect sphere.',
                'Brain waves. Studies show that brain waves are more active while dreaming than when you are awake.',
                'Lost dreams. Five minutes after a dream, half of the dream is forgotten. Ten minutes after a dream, over 90% is forgotten. Write down your dreams immediately if you want to remember them.',
                'Blind people dream. Dreams are more than just visual images, and blind people do dream. Whether or not they dream in pictures depends on if they were born blind or lost their vision later.',
                'Color or B&W. Some people about 12% dream only in black and white while others dream in color.',
                'Virtually paralyzed. While you sleep, your body produces a hormone that may prevent you from acting out your dreams, leaving you virtually paralyzed.',
                'Snoring. If you are snoring, you are not dreaming.',
                'During a dream. If you are awakened during a dream, you are much more likely to remember the dream than if you slept until a full night’s sleep.',
                'Symbolism. As those who invest in dream dictionaries can attest, dreams almost never represent what they actually are. The unconscious mind strives to make connections with concepts you will understand, so dreams are largely symbolic representations.',
                'Adenosine. Caffeine works to block naturally occurring adenosine in the body, creating alertness. Scientists have recently discovered this connection and learned that doing the opposite–boosting adenosine–can actually help promote more natural sleep patterns and help eliminate insomnia.',
                'Dream showings. Japanese researchers have successfully developed a technology that can put thoughts on a screen and may soon be able to screen ',
                'Airplanes and headaches. A study showed a correlation between flying and headaches and states that around 6% of people who fly get headaches brought on by the flight itself.',
                'Juggling. Juggling has shown to change the brain in as little as seven days. The study indicates that learning new things helps the brain to change very quickly.',
                'Disney and sleep. A study published in the journal Sleep Medicine describes how Disney creators used real sleep disorders in many of their animated pets.',
                'Blinking. Each time we blink, our brain kicks in and keeps things illuminated so the whole world doesn’t go dark each time we blink about 20,000 times a day.',
                'Laughing. Laughing at a joke is no simple task as it requires activity in five different areas of the brain.',
                'Yawns are contagious. Ever notice that you yawned after someone around you did? Scientists believe this may be a response to an ancient social behavior for communication that humans still have.',
                'Brain Bank. Harvard maintains a Brain Bank where over 7,000 human brains are store for research purposes.',
                'Outer space. The lack of gravity in outer space affects the brain in several ways. Scientists are studying how and why, but you may want to hold off on your next trip to the moon.',
                'Music. Music lessons have shown to considerably boost brain organization and ability in both children and adults.',
                'Thoughts. The average number of thoughts that humans are believed to experience each day is 70,000.',
                'Ambidexterity. Those who are left-handed or ambidextrous have a corpus collosum the part of the brain that bridges the two halves that is about 11% larger than those who are right-handed.',
                'Stressful job. According to a study by Bristol-Myers Squibb, accountants have the highest incidence of on-the-job headaches, followed by librarians, then bus and truck drivers.',
                'Aristotle. Aristotle mistakenly thought that the functions of the brain actually took place in the heart.',
                'Cannibalism. Some research shows that humans carry genes that help protect the brain from prion diseases, or diseases contracted through eating human flesh, leading medical experts to believe that ancient humans may have eaten other humans.',
                'Shakespeare. The word brain appears 66 times in the plays of William Shakespeare.'
                'A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.',
                'Saturn radiates two and a half times more energy into space than it receives from the sun.',
                'The temperature inside the Sun can reach 15 million degrees Celsius.',
                'The Moon is moving approximately 3.8 cm away from our planet every year.',
            ],
            SKILL_NAME: 'General Facts',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'See You',
        },
    },
    'de-DE': {
        translation: {
            FACTS: [
                'Ein Jahr dauert auf dem Merkur nur 88 Tage.',
                'Die Venus ist zwar weiter von der Sonne entfernt, hat aber höhere Temperaturen als Merkur.',
                'Venus dreht sich entgegen dem Uhrzeigersinn, möglicherweise aufgrund eines früheren Zusammenstoßes mit einem Asteroiden.',
                'Auf dem Mars erscheint die Sonne nur halb so groß wie auf der Erde.',
                'Die Erde ist der einzige Planet, der nicht nach einem Gott benannt ist.',
                'Jupiter hat den kürzesten Tag aller Planeten.',
                'Die Milchstraßengalaxis wird in etwa 5 Milliarden Jahren mit der Andromeda-Galaxis zusammenstoßen.',
                'Die Sonne macht rund 99,86 % der Masse im Sonnensystem aus.',
                'Die Sonne ist eine fast perfekte Kugel.',
                'Eine Sonnenfinsternis kann alle ein bis zwei Jahre eintreten. Sie ist daher ein seltenes Ereignis.',
                'Der Saturn strahlt zweieinhalb mal mehr Energie in den Weltraum aus als er von der Sonne erhält.',
                'Die Temperatur in der Sonne kann 15 Millionen Grad Celsius erreichen.',
                'Der Mond entfernt sich von unserem Planeten etwa 3,8 cm pro Jahr.',
            ],
            SKILL_NAME: 'Weltraumwissen auf Deutsch',
            GET_FACT_MESSAGE: 'Hier sind deine Fakten: ',
            HELP_MESSAGE: 'Du kannst sagen, „Nenne mir einen Fakt über den Weltraum“, oder du kannst „Beenden“ sagen... Wie kann ich dir helfen?',
            HELP_REPROMPT: 'Wie kann ich dir helfen?',
            STOP_MESSAGE: 'Auf Wiedersehen!',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random  fact from the  facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
