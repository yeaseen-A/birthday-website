import type { MemoryDefinition } from '@/types/memory';

/**
 * ============================================================
 * This file holds every piece of wording on the site.
 * Content below was pulled directly from the uploaded docx files.
 * A couple of spots are still marked PLACEHOLDER — see README.md
 * for exactly what's left to fill in.
 * ============================================================
 */

export const HOME_CONTENT = {
  title: 'Happy Birthday ❤️',
  subtitle: `Every star holds a memory.\nWhen you've found them all,\nthe moon has one last surprise.`,
  beginLabel: 'Begin',
};

export const MEMORY_DEFINITIONS: MemoryDefinition[] = [
  { id: 'welcome', label: 'Welcome', position: { top: '18%', left: '12%' } },
  { id: 'how-we-met', label: 'Where It All Began', position: { top: '30%', left: '78%' } },
  { id: 'voice', label: 'The Voice That Brings Me Peace', position: { top: '55%', left: '20%' } },
  { id: 'reaction', label: "A Memory I'll Never Forget", position: { top: '15%', left: '48%' } },
  { id: 'reasons', label: '50 Little Reasons', position: { top: '68%', left: '65%' } },
  { id: 'funny', label: 'The Stars That Make Me Laugh', position: { top: '40%', left: '40%' } },
  { id: 'future', label: 'One Day...', position: { top: '75%', left: '35%' } },
  { id: 'song', label: 'The Song That Feels Like Us', position: { top: '25%', left: '65%' } },
  { id: 'wish', label: 'For Today', position: { top: '60%', left: '88%' } },
];

export const WELCOME_CONTENT = {
  heading: 'Welcome',
  body: `Every star in this sky holds a memory, a laugh, a dream, or just how much we love each other.

I wanted to give you something that you could come back to whenever you wanted, a place filled with moments that remind me how lucky I am to have you.

So, on your birthday, I made you a teensy universe of our own.

Happy Birthday Audree❤️`,
};

export const HOW_WE_MET_CONTENT = {
  heading: 'Where It All Began',
  body: `It's kind of funny how everything started.

We met at Arisha and Anisha's sweet 16 remember? I honestly never expected that one random conversation would end up changing so much.

I still remember us talking about Armaan and Anisha, and I was joking about how Armaan was way too good for her. Looking back, it's funny that something so random is one of the first memories I have with you. (I still remember beating you at ping pong like in 8th grade)

After the party, you asked for my snap, and I don't think either of us realized where that would lead. What started as simple as that turned into late-night conversations, countless memories, and eventually one of the most important people in my life.

I'm really grateful you asked for me that day, because if you hadn't, I would've missed out on knowing someone as amazing as you.

And somehow, all of that started because of a random conversation at a party.`,
  // A small gallery of your favorite photos together — add or remove entries freely.
  photos: [
    { src: '/images/favorite-photo1.jpg', alt: 'A favorite photo of us' },
    { src: '/images/favorite-photo2.jpg', alt: 'A favorite photo of us' },
    { src: '/images/favorite-photo3.jpg', alt: 'A favorite photo of us' },
    { src: '/images/favorite-photo4.jpg', alt: 'A favorite photo of us' },
    { src: '/images/favorite-photo5.jpg', alt: 'A favorite photo of us' },
    { src: '/images/favorite-photo6.jpg', alt: 'A favorite photo of us' },
  ],
};

export const VOICE_CONTENT = {
  heading: 'Your Voice',
  // No dedicated text file was provided for this memory — replace with
  // a line or two about why her voice means this to you.
  body: `You don't understand just how much this means to me. I love being reassured by you`,
  audioSrc: '/audio/favorite-voice-message.mp3',
};

export const REACTION_CONTENT = {
  heading: "A Memory I'll Never Forget",
  body: `Out of all the memories we've made, this is one I'll always come back to.

This was your reaction to my gifts I sent you to remember me at Shad. Watching you open them and seeing how genuinely happy you were made me realize just how much something so simple could mean. I still think you looked absolutely adorable, and your reaction is something I'll never get tired of watching.

More than anything, this memory made me feel seen. It reminded me that the effort we put into making each other happy never goes unnoticed. Seeing your smile and how excited you were meant more to me than I can put into words.

Whenever I watch this video, it reminds me why I fell in love with you in the first place. It's one of those little moments that I'll always keep close to my heart.`,
  videoSrc: '/video/reaction-video.mp4',
};

export const REASONS_CONTENT = {
  heading: '50 Little Reasons',
  reasons: [
    'I love your smile.',
    'I love your laugh.',
    'I love your eyes.',
    'I love your voice.',
    'I love how kind you are.',
    'I love how caring you are.',
    'I love how patient you are with me.',
    'I love that you always know how to make me smile.',
    'I love that I can be myself around you.',
    'I love how safe you make me feel.',
    'I love how supportive you are.',
    'I love the little things you do without realizing it.',
    'I love how excited you get when talking about something you love.',
    'I love how you always try to understand me.',
    'I love how thoughtful you are.',
    'I love your sense of humor.',
    'I love the way you brighten my day.',
    "I love that you're always there for me.",
    'I love how beautiful you are, inside and out.',
    'I love how genuine you are.',
    'I love how you always make me feel appreciated.',
    'I love your hugs, even if I have to imagine them sometimes.',
    'I love how we can talk for hours without getting bored.',
    'I love how comfortable our silence can be.',
    'I love how you believe in me.',
    'I love that you never stop reassuring me when I need it.',
    'I love your confidence.',
    'I love how you make ordinary moments feel special.',
    'I love the way you say my name.',
    'I love how you remember the little things.',
    'I love that we can laugh over the dumbest things.',
    'I love all of our inside jokes.',
    'I love how you always make me feel like I matter.',
    'I love how passionate you are.',
    'I love your random little habits.',
    'I love how you always find a way to make me feel better.',
    'I love how determined you are.',
    'I love how much you care about the people you love.',
    "I love how much you've helped me grow.",
    "I love the memories we've made together.",
    'I love that we always have something to look forward to.',
    'I love that you chose me.',
    'I love how lucky you make me feel.',
    'I love dreaming about our future together.',
    'I love how you make distance feel a little smaller.',
    'I love every version of you—the happy, sleepy, excited, and goofy one.',
    'I love that you make me want to be a better person.',
    'I love that you make life more exciting.',
    'I love you for a million little reasons I could never fit into one list.',
    "I love you simply because you're you.",
  ],
};

export const FUNNY_CONTENT = {
  heading: 'The Stars That Make Me Laugh',
  photos: [
    { src: '/images/funny1.jpg', alt: '' },
    { src: '/images/funny2.jpg', alt: '' },
  ],
};

export const FUTURE_CONTENT = {
  heading: 'One Day...',
  paragraphs: [
    'One day, I want to take you on a late-night drive with our favorite music playing and nowhere we need to be.',
    'One day, I want to celebrate your birthday with you in person instead of through a screen.',
    'One day, I want us to watch the sunset together without having to count down the hours until we have to say goodbye.',
    'I know we still have a lot of waiting to do, but every day brings us one step closer to making these memories real.',
    "Until then, I'll keep dreaming about all the adventures that are still waiting for us.",
  ],
};

export const SONG_CONTENT = {
  heading: 'The Song That Feels Like Us',
  body: `Every relationship has a song that just feels right, and for us, it's Honey.

You were the one who introduced me to it, and I'm really glad you did because I ended up loving it just as much as you. Now, whenever I hear it, I can't help but think of us.

One of the reasons this song means so much to me is because of what it talks about. It's about finding someone you want to build a life with, settling down together, and choosing each other through everything. Every time I listen to it, it reminds me of the future I hope we get to share.

I hope that years from now, we'll still hear this song and think back to where it all began. Until then, it'll always be one of my favorite reminders of you.`,
  audioSrc: '/audio/our-song.mp3',
  songTitle: 'Honey',
  songArtist: 'Taylor Swift',
};

export const WISH_CONTENT = {
  heading: 'For Today',
  body: `Happy Birthday Audree❤️

I hope today reminds you how loved, appreciated, and special you truly are. You deserve all the happiness in the world, and I hope this year brings you countless smiles, amazing memories, and everything you've been wishing for.

Thank you for being such an important part of my life and for making my days brighter just by being yourself.

I hope this little universe I made for you shows even a small piece of how much you mean to me.

Enjoy your special day. I love you 💕`,
};

export const FINALE_CONTENT = {
  body: `Dear Ariana Audree Zaher, aka the prettiest girl in the world, aka my future wife.

You keep saying in your letters how you're in awe of me sending you letters and gifts, but here I am, just in awe of you being my girlfriend. I am genuinely so amazed that someone like you is willing to put up with me every single day. I know this really isn't a physical letter you can hold, but I figured that I should put my skills to use in a way that honours you, and shows a fraction of how much love I have for you.

You have so many amazing qualities, don't even get me started. You are so incredibly smart, it impresses me everyday. You are so social too, like I have no clue how you just make so many new friends easily but you just do, it's so impressive. Your face. You are so pretty and good-looking, more than you let on. I hate how sometimes you think you're not attractive enough or that you think I should be with someone hotter (because trust me, no one exists that's hotter than you), because it hurts me most when you think of things like that.

I also want to say how sorry I am for everytime I've hurt you or made you feel like I wasn't serious about our relationship. I wish you'd never have to experience the regret that I feel, and I promise I'm doing my best to make myself into a better man, and a better person for you. I am so infinitely grateful that I was blessed with someone who is willing to work with me on my insecurities and understands who I am. I hope that I can be that person for you too.

I can't wait to just see you again and kiss you and never have to let you go. I'm putting you in the longest and tightest hug ever, believe me. I want to walk foreverrrrr with you, hands intertwined. I want to play with your hair in some starry meadow in the middle of nowhere, while we tell each other the silliest stories. And I want to meet all of your family, the beautiful, amazing people that shaped you into the woman you are today.

So yeah. I know this may not been what you were expecting for your birthday, and I'm really sorry if that's true. I just wanted to make something special and unique to me, since I know like most of your gifts are gonna be expensive, I don't really want mine to look cheap in comparison. Because my love for you is not cheap. I would spend every last cent that I have if it meant that you were happy. But, it is your birthday, so I should get you something atleast.

Happy birthday to you, my beautiful girl. You have brought so much happiness into my life, and I hope that you're 16th brings you happiness as well.

All my love, forever and always

Yeaseen💕`,
  closing: 'I love you ❤️',
};

export const BACKGROUND_MUSIC_SRC = '/audio/background-music.mp3';
export const QR_PLACEHOLDER_SRC = '/images/qr-placeholder.svg';

/**
 * Not currently wired into any of the 9 memories — you sent this file
 * but the original brief didn't specify where it goes. It's included
 * at /audio/birthday-message.m4a in case you want to add it in yourself,
 * e.g. as a bonus 10th star. See the README for a quick pointer on how.
 */
export const BONUS_VOICE_MESSAGE_SRC = '/audio/birthday-message.m4a';
