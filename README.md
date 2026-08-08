# Happy Birthday ❤️ — Interactive Website

A magical night-sky birthday experience: 9 memory stars to discover, a moon
that brightens as she finds them, and a full-screen love letter finale.

## 1. Run it

```bash
npm install
npm run dev
```

Then open the local URL it prints (usually `http://localhost:5173`).

## 2. What's already done

Everything from your uploaded folder is wired in and working:

| Your file | Where it's used |
|---|---|
| `welcome.docx` | "Welcome" memory text |
| `how-we-met.docx` + `favorite-photo1–6.jpg` | "Where It All Began" — text plus a slow crossfading gallery of all 6 photos |
| `favorite-voice-message.mp3` | "The Voice That Brings Me Peace" audio player |
| `reaction-video.docx` + `reaction-video.mp4` | "A Memory I'll Never Forget" — text plus the embedded video |
| `reasons.docx` | "50 Little Reasons" — all 50, one card at a time |
| `funny1.jpg` / `funny2.jpg` | "The Stars That Make Me Laugh" |
| `future.docx` | "One Day..." — each paragraph fades in on its own |
| `our-song.docx` + `our-song.mp3` | "The Song That Feels Like Us" |
| `birthday-wish.docx` | "For Today" |
| `love-letter.docx` | The finale, under the full-screen moon |
| `background.mp3` | Background music, starts on "Begin" |

The reaction video was compressed from its original 272MB down to ~106MB
(same length and quality tier, just re-encoded) so the page doesn't choke
on load — still large, see the note at the bottom if you want it smaller.

## 3. Two small things left to fill in

Open **`src/data/content.ts`** — everything marked `PLACEHOLDER` still
needs your input:

- **`VOICE_CONTENT.body`** — there was no dedicated text file for "The
  Voice That Brings Me Peace," so write a line or two here about why her
  voice means this to you.
- **`SONG_CONTENT.songArtist`** — `our-song.docx` names the song ("Honey")
  but not the artist, and there's more than one song by that name, so I
  left it blank rather than guess wrong.

## 4. One file I wasn't sure what to do with

`birthday-message.m4a` was in your folder but wasn't mentioned anywhere
in the original 9-memory brief. I copied it in at
`public/audio/birthday-message.m4a` and exported its path as
`BONUS_VOICE_MESSAGE_SRC` in `content.ts`, but it isn't hooked up to
anything yet. A few options if you want to use it:

- Add it as a 10th star/memory (copy one of the existing modal
  components in `src/components/experience/modals/` as a starting point,
  add it to `MEMORY_DEFINITIONS` in `content.ts`)
- Swap it in as the "voice message" audio instead of
  `favorite-voice-message.mp3`
- Leave it out — the site works fully without it

## 5. How the experience works

- **Home** — the title writes itself in, then "Begin" starts the music
  and moves into the sky.
- **Sky** — 9 unlabeled stars are scattered across the screen. Hovering
  reveals a label; clicking opens that memory in a glass modal and marks
  it as found. The moon in the corner gradually glows brighter as more
  memories are found.
- **Moon** — once all 9 are found, the moon becomes clickable. Clicking it
  fades everything else out and plays the finale: the love letter,
  animated in, ending on "I love you ❤️" with a one-time confetti burst.

Progress is saved in the browser (`localStorage`), so if she closes the
tab and comes back, her found stars are remembered.

## 6. Notes

- Every piece of text uses one Google Font, **Caveat**, per the brief.
- Colors, glow intensity, and animation timing live in
  `tailwind.config.js` and the individual components.
- Reduced-motion is respected automatically for anyone with that OS
  setting on.
- The QR code at `public/images/qr-placeholder.svg` is still a
  placeholder — swap it for a real QR image once you have a live link
  (see deploying, below).

## 7. Shrinking the video further (optional)

If ~106MB still feels too big to comfortably load on mobile data, you
can compress it more aggressively with ffmpeg, trading a bit of quality
for size — for example:

```bash
ffmpeg -i public/video/reaction-video.mp4 -vf "scale=720:-2" -crf 30 -preset slow -c:a aac -b:a 96k public/video/reaction-video-smaller.mp4
```

Then update `videoSrc` in `REACTION_CONTENT` in `content.ts`.

## 8. Deploying it (optional)

Once you're happy with it locally, `npm run build` produces a static
`dist/` folder you can drop onto any static host (Vercel, Netlify,
GitHub Pages, etc.) so you can send her a real link — or generate a QR
code pointing at that link for the placeholder graphic.
