window.album = {
    title: "Bad",
    artist: "Michael Jackson",
    releaseDate: "31 de agosto de 1987",
    recordingDate: "janeiro de 1986 a julho de 1987",
    genre: "Pop / R&B / Funk",
    labels: ["Epic"],
    cover: "assets/cover.jpg",
    // Paleta medida na capa (assets/cover.jpg) — ver tools/medir_paleta.py
    // Duas versões feitas só com estas cores: Dia (o branco da capa) e Noite (o preto da jaqueta).
    palette: {
        white: "#FFFFFF",     // fundo branco da capa
        black: "#000000",     // bloco vertical do nome
        jacket: "#171619",    // jaqueta preta
        red: "#D80203",       // BAD, pincelada vermelha
        redhi: "#DD0A0D",     // BAD, parte mais clara
        reddk: "#CF0000",     // BAD, parte mais escura
        silver: "#BEBBBC",    // zíperes e fivelas (meio-tom)
        silverhi: "#E1D9D5",  // zíperes e fivelas (brilho)
        skin: "#E6AD8B",      // pele
        skinshadow: "#D19274",// pele na sombra
        neck: "#B97D64",      // pele do pescoço
        belt: "#927C68"       // cinto
    },
    description: "Sétimo álbum de estúdio de Michael Jackson, lançado em 31 de agosto de 1987, com produção de Quincy Jones e do próprio Michael. Foi o primeiro álbum a emplacar cinco singles em 1º lugar na Billboard Hot 100: \"I Just Can't Stop Loving You\", \"Bad\", \"The Way You Make Me Feel\", \"Man in the Mirror\" e \"Dirty Diana\".",
    totalDuration: "48:13",
    awards: [
        { award: "Cinco singles em 1º lugar na Hot 100", result: "Recorde", year: "1987–1988", category: "Billboard", description: "Primeiro álbum da história a ter cinco singles no topo da Hot 100." }
    ],
    technicalCredits: {
        production: ["Quincy Jones", "Michael Jackson"],
        recording: ["Bruce Swedien"],
        studios: ["Westlake Recording Studios (Los Angeles)"]
    },
    // CONFIRA os nomes dos arquivos de áudio (audio/01.flac … 10.flac) e a ordem das faixas.
    // Letras (.lrc em `lyrics`) e tradução (`translation`) são opcionais; a duração aparece sozinha ao tocar.
    tracks: [
        {
            number: 1,
            title: "Bad",
            duration: "4:07",
            composers: ["Michael Jackson"],
            audio: "audio/01.flac",
            lyrics: `[00:18.04] Ah, your butt is mine, gon' tell you right, ah
[00:22.95] Just show your face in broad daylight, ah
[00:27.10] I'm tellin' you on who I feel, ah
[00:31.32] Gonna hurt your mind, don't shoot to kill
[00:34.73] Shamone, ah, shamone
[00:37.65] Lay it on me, ah, alright
[00:43.33] Ah, I'm givin' you on count to three, ah
[00:48.06] Just show your stuff or let it be, ah
[00:52.21] I'm tellin' you, just watch your mouth, ah
[00:56.49] I know your game, what you're about
[01:00.66] Well, they say the sky's the limit
[01:02.79] And to me that's really true, ah
[01:05.09] But, my friend, you have seen nothin'
[01:06.86] Just wait 'til I get through
[01:08.74] Because I'm bad, I'm bad, shamone (bad, bad, really, really bad)
[01:12.95] You know I'm bad, I'm bad (bad, bad)
[01:15.54] You know it (really, really bad)
[01:17.15] You know I'm bad, I'm bad (bad, bad)
[01:19.79] Shamone, you know (really, really bad)
[01:21.84] And the whole world has to answer right now
[01:23.91] Just to tell you once again
[01:25.57] Who's bad?
[01:28.25] 
[01:34.63] The word is out, you're doin' it wrong, ah
[01:38.92] Gon' lock you up before too long, ah
[01:43.14] Your lyin' eyes gon' tell you right, ah
[01:47.37] So listen up, don't make a fight, ah
[01:51.57] Your talk is cheap, you're not a man, ah
[01:55.79] You're throwin' stones to hide your hands
[01:59.68] Well, they say the sky's the limit
[02:01.72] And to me that's really true, ah
[02:03.83] But, my friend, you have seen nothin'
[02:05.99] Just wait 'til I get through
[02:07.59] Because I'm bad, I'm bad, shamone (bad, bad, really, really bad)
[02:11.70] You know I'm bad, I'm bad (bad, bad)
[02:14.31] You know it (really, really bad)
[02:15.97] You know I'm bad, I'm bad (bad, bad)
[02:18.54] You know it, you know (really, really bad)
[02:20.66] And the whole world has to answer right now
[02:22.72] Just to tell you once again
[02:24.25] Who's bad?
[02:26.92] 
[02:50.15] We can change the world tomorrow
[02:52.29] This could be a better place, ah
[02:54.37] If you don't like what I'm sayin'
[02:56.46] Then won't you slap my face?
[02:57.97] Because I'm bad, I'm bad, shamone (bad, bad, really, really bad)
[03:02.17] You know I'm bad, I'm bad (bad, bad)
[03:05.03] You know it (really, really bad)
[03:06.62] You know I'm bad, I'm bad (bad, bad)
[03:09.26] You know it, you know (really, really bad)
[03:11.14] And the whole world has to answer right now (hoo, hoo)
[03:13.28] Just to tell you once again (hoo)
[03:15.05] You know I'm bad, I'm bad, shamone (bad, bad, really, really bad)
[03:19.29] You know I'm bad, I'm bad (bad, bad)
[03:21.92] You know it, you know it (really, really bad)
[03:23.78] You know, you know (bad, bad)
[03:25.64] You know, shamone (really, really bad)
[03:28.09] And the whole world has to answer right now
[03:30.15] Just to tell you once again
[03:31.73] You know I'm smooth, I'm bad, you know it (bad, bad, really, really bad)
[03:35.88] You know I'm bad, I'm bad (bad, bad, really, really bad)
[03:40.67] You know, you know, you know it, come on (bad, bad, really, really bad)
[03:44.86] And the whole world has to answer right now (hoo)
[03:46.96] Just to tell you once again (hoo)
[03:48.56] You know I'm bad, I'm bad, you know it (bad, bad, really, really bad)
[03:52.65] You know I'm bad, you know, woo (bad, bad, really, really bad)
[03:56.96] You know I'm bad, I'm bad (bad, bad)
[03:59.42] You know it, you know (really, really bad)
[04:01.49] And the whole world has to answer right now
[04:03.63] Just to tell you once again
[04:05.15] Who's bad?
[04:06.14] `
        },
        {
            number: 2,
            title: "The Way You Make Me Feel",
            duration: "4:58",
            composers: ["Michael Jackson"],
            audio: "audio/02.flac",
            lyrics: `[00:20.95] Hee-hee
[00:23.59] Ooh
[00:25.72] Go'n girl
[00:27.04] 
[00:29.47] Ow
[00:30.26] 
[00:32.05] Hee
[00:32.78] 
[00:38.84] Hey, pretty baby, with the high heels on
[00:42.99] You give me fever, like I've never, ever known
[00:46.95] You're just a product of, loveliness
[00:51.50] I like the groove of your walk, your talk, your dress
[00:55.33] I feel your fever from miles around
[00:59.65] I'll pick you up in my car and we'll paint the town
[01:03.99] Just kiss me baby and tell me twice
[01:08.05] That you're the one for me
[01:10.63] The way you make me feel
[01:12.33] (The way you make me feel)
[01:14.69] You really turn me on
[01:16.65] (You really turn me on)
[01:18.15] You knock me off of my feet
[01:20.70] (You knock me off of my feet)
[01:23.03] My lonely days are gone
[01:24.71] (My lonely days are gone)
[01:27.61] 
[01:29.31] I like the feelin' you're givin' me
[01:33.15] Just hold me baby and I'm in ecstasy
[01:37.66] Oh, I'll be workin' from nine to five
[01:41.86] To buy ya things to keep you by my side
[01:46.27] I never felt so in love before
[01:50.29] Just promise baby, you'll love me forevermore
[01:54.31] I swear I'm keepin' you satisfied
[01:58.65] 'Cause you're the one for me
[02:00.54] The way you make me feel
[02:02.56] (The way you make me feel)
[02:04.75] You really turn me on
[02:06.91] (You really turn me on)
[02:09.08] You knock me off of my feet, now baby
[02:11.52] (You knock me off of my feet)
[02:13.34] My lonely days are gone
[02:15.55] (My lonely days are gone)
[02:17.31] Acha-ooh
[02:19.45] 
[02:20.96] Go'n girl
[02:23.23] Go'n
[02:25.31] Hee-hee
[02:27.12] Ow
[02:29.72] Go'n girl
[02:31.98] 
[02:36.36] I never felt so in love before
[02:40.51] Promise baby, you'll love me forevermore
[02:44.74] I swear I'm keepin' you satisfied
[02:48.87] 'Cause you're the one for me
[02:51.11] The way you make me feel
[02:53.02] (The way you make me feel)
[02:55.19] You really turn me on
[02:57.18] (You really turn me on)
[02:59.49] You knock me off of my feet, now baby
[03:02.07] (You knock me off of my feet)
[03:03.86] My lonely days are gone
[03:05.84] (My lonely days are gone)
[03:07.93] The way you make me feel
[03:10.12] (The way you make me feel)
[03:12.24] You really turn me on
[03:14.38] (You really turn me on)
[03:16.38] You knock me off of my feet, now baby
[03:19.00] (You knock me off of my feet)
[03:20.58] My lonely days are gone
[03:22.59] (My lonely days are gone)
[03:24.83] Ain't nobody's business (the way you make me feel)
[03:27.37] Ain't nobody's business
[03:29.47] Ain't nobody's business (you really turn me on)
[03:31.78] Ain't nobody's business
[03:33.81] But mine and my baby
[03:35.24] (You knock me off of my feet) hee-hee
[03:37.90] Hee-hee, ooh
[03:39.45] (My lonely days are gone)
[03:42.08] Give it to me (the way you make me feel)
[03:44.54] Give me some time
[03:46.37] Come on be my girl (you really turn me on)
[03:48.67] I wanna be with mine
[03:50.24] Ain't nobody's business (you knock me off of my feet)
[03:52.41] Ain't nobody's business
[03:54.62] But mine and my baby's (my lonely days are gone)
[03:57.78] Go'n girl, ow
[04:01.87] Hee-hee, ooh
[04:03.99] 
[04:07.25] Choo-coo, choo-coo
[04:08.52] 
[04:10.49] Choo-coo, choo-coo, choo-coo
[04:11.92] 
[04:15.34] Go'n girl
[04:17.10] (The way you make me feel) hee hee
[04:19.75] Hee-hee-hee!
[04:21.04] (You really turn me on)
[04:25.16] (You knock me off of my feet)
[04:29.40] (My lonely days are gone)
[04:33.60] (The way you make me feel)
[04:38.30] (You really turn me on)
[04:42.51] (You knock me off of my feet)
[04:46.54] (My lonely days are gone)
[04:51.04] (The way you make me feel)
[04:53.35] `
        },
        {
            number: 3,
            title: "Speed Demon",
            duration: "4:02",
            composers: ["Michael Jackson"],
            audio: "audio/03.flac",
            lyrics: `[00:20.82] I'm headed for the border
[00:23.41] It's on my mind
[00:25.75] And nothin' really matters
[00:28.34] I've got to be on time
[00:30.58] Look in the view mirror
[00:32.76] Is he hot on my tracks
[00:35.59] Is he getting nearer
[00:37.82] I feel some heat, is on my back
[00:40.78] (Speed demon)
[00:42.43] Speedin' on the freeway, gotta get a lead way
[00:47.68] (Speed demon)
[00:47.68] Doin' it on the highway, gotta have it my way
[00:50.43] (Speed demon)
[00:52.37] Mind is like a compass, I'm stoppin' at nothin'
[00:54.67] (Speed demon)
[00:56.45] Yeah, pull over, boy, and get your ticket right
[01:01.84] 
[01:04.56] And nothin' gonna stop me
[01:06.66] Ain't no stop and go
[01:09.35] I'm speedin' on the midway
[01:11.87] I gotta really burn this road
[01:14.72] (Speed demon)
[01:16.49] Speedin' on the freeway, gotta get a lead way
[01:19.53] (Speed demon)
[01:19.85] Doin' it on the highway, gotta have it my way
[01:24.44] (Speed demon)
[01:26.38] Mind is like a compass, I'm stoppin' at nothin'
[01:28.53] (Speed demon)
[01:30.42] Yes, pull over, boy, and get your ticket right
[01:35.81] 
[01:39.14] Speed demon, you're the very same one
[01:42.60] Who said the future's in your hands
[01:45.08] The life you save could be your own
[01:48.97] You're preachin' 'bout my life like you're the law
[01:52.52] Gonna live each day and hour like
[01:55.23] For me there's no tomorrow
[02:00.32] Go, go, go, auh
[02:27.51] (Speed demon)
[02:29.49] Speedin' on the freeway, gotta get a lead way
[02:31.71] (Speed demon)
[02:34.53] Got fire in my pocket, I just lit a rocket
[02:36.57] (Speed demon)
[02:38.25] I just, pull over, boy, and get your ticket right
[02:42.92] (Speed demon)
[02:44.12] Pull over, boy, and get your ticket right
[02:47.98] (Speed demon)
[02:47.99] I just, pull over, boy, and eat your ticket
[02:51.40] Pull over, boy
[02:53.93] Pull over, boy, and get your ticket right
[02:56.46] Get your ticket right
[03:17.75] 
[03:26.66] Pull over, boy
[03:28.89] Get your ticket right
[03:31.42] Pull over, boy
[03:33.48] And get your ticket right
[03:36.38] Pull over, boy
[03:37.56] Pull over, boy, and get your ticket
[03:40.03] Eat your ticket
[03:41.13] Get your ticket
[03:42.44] Eat yo', get yo'
[03:45.88] 
[03:53.37] Get your ticket right
[03:54.65] `
        },
        {
            number: 4,
            title: "Liberian Girl",
            duration: "3:52",
            composers: ["Michael Jackson"],
            audio: "audio/04.flac",
            lyrics: `[00:12.69] Naku penda piya-naku taka piya mpenziwe
[00:26.66] 
[00:39.99] Liberian girl
[00:42.84] You came and you changed my world
[00:46.30] A love so brand new
[00:49.06] Liberian girl
[00:52.09] You came and you changed me, girl
[00:56.07] A feeling so true
[00:58.50] Liberian girl
[01:00.94] You know that you came
[01:02.70] And you changed my world
[01:04.92] Just like in the movies
[01:07.39] With two lovers in a scene
[01:09.21] And she says, "Do you love me?"
[01:11.63] And he says, "So endlessly"
[01:13.70] I love you Liberian girl
[01:18.54] Naku penda piya-naku taka piya mpenziwe
[01:23.67] 
[01:35.15] Liberian girl
[01:38.30] More precious than any pearl
[01:41.23] Your love so complete
[01:43.72] Liberian girl
[01:46.95] You kiss me then, ooh, the world
[01:50.13] You do this to me
[01:52.56] Liberian girl
[01:55.20] You know that you came
[01:57.40] And you changed my world
[02:00.06] Just like in the movies
[02:02.19] With two lovers in a scene
[02:03.79] And she says, "Do you love me?"
[02:05.86] And he says, "So endlessly"
[02:08.54] I love you Liberian girl
[02:12.55] Naku penda piya-naku taka piya mpenziwe
[02:17.34] 
[02:19.64] 
[02:31.35] Liberian girl
[02:32.34] You know that you came
[02:33.99] And you changed my world
[02:36.64] I wait for the day
[02:38.72] When you have to say "I do"
[02:40.68] And I'll smile and say it too
[02:42.53] And forever will be true
[02:44.92] I love you Liberian girl
[02:50.04] All the time
[02:54.56] I love you Liberian girl
[03:00.47] All the time
[03:03.19] I love you Liberian girl
[03:10.39] All the time
[03:12.93] I love you Liberian girl
[03:19.42] All the time
[03:22.08] I love you, I love you baby, I want you, I love you baby
[03:27.18] 
[03:31.78] Ooh (Girl)
[03:37.01] I love you baby, I want you baby
[03:39.40] Ooh (Girl)
[03:40.77] `
        },
        {
            number: 5,
            title: "Just Good Friends (com Stevie Wonder)",
            duration: "4:07",
            composers: ["Terry Britten", "Graham Lyle"],
            audio: "audio/05.flac",
            lyrics: `[00:31.63] I watched you on the floor
[00:33.86] Cheek to cheek
[00:37.66] She's getting to you
[00:40.02] You didn't see
[00:42.10] Her eyes on me, no
[00:45.73] She looked right through you
[00:48.02] Before you make
[00:50.47] A big mistake remember
[00:53.82] That looks can fool you, baby
[00:57.84] There's somethin' I would sure appreciate
[01:00.40] 
[01:02.64] If you can keep a secret
[01:05.24] Baby loves me but she never shows she cares
[01:10.50] No, you won't see her kiss and hug me
[01:13.59] Baby loves me though she acts like I'm not there
[01:18.39] That doesn't mean she doesn't love me ooo
[01:21.97] If they ask her tell 'em that we're just good friends
[01:25.27] 
[01:27.57] Just good friends
[01:31.93] Doot do doo doo
[01:36.34] Just good friends
[01:39.84] You better take advice
[01:42.02] Never trust, first impressions
[01:48.78] I tried to hide this affair
[01:52.27] 
[01:54.39] From their suspicions
[01:58.11] So even if she's askin' you to stay
[02:02.85] You better know where you stand
[02:05.51] Baby loves me though she never shows she cares
[02:10.87] No, you won't see her kiss and hug me
[02:13.66] My baby loves me though she acts like I'm not there
[02:18.97] That doesn't mean she doesn't love me ooo
[02:22.58] Now if they ask you jus' tell 'em that we're just good friends
[02:28.33] Yes, just good friends
[02:31.90] Root do do do do do doo doo
[02:36.64] Just good friends
[02:40.31] Listen up
[02:43.42] We've got a problem here, I can see the signs
[02:49.43] I guess the lady is still makin' up her mind
[02:55.85] Say we're just good friends
[02:58.45] Baby loves me though she never shows she cares
[03:03.41] No you won't see her kiss and hug me
[03:06.86] My baby loves me though she acts like I'm not there
[03:11.18] You doggone lover
[03:13.27] Don't you wanna know?
[03:14.99] My Baby loves me though she never shows she cares
[03:19.97] She doesn't kiss and hug me
[03:22.56] My baby loves me she love me, she love me
[03:25.89] [Incomprehensible]
[03:28.40] 
[03:37.24] Just good friends
[03:39.82] Baby loves me she love me, she love me, she loves me
[03:43.71] 
[03:46.32] [Incomprehensible]
[03:46.79] `
        },
        {
            number: 6,
            title: "Another Part of Me",
            duration: "3:54",
            composers: ["Michael Jackson"],
            audio: "audio/06.flac",
            lyrics: `[00:24.27] We're takin' over
[00:26.25] We have the truth
[00:28.42] This is the mission
[00:30.82] To see it through
[00:33.18] Don't point your finger
[00:35.29] Not dangerous
[00:37.41] This is our planet
[00:39.83] You're one of us
[00:42.86] We're sendin' out
[00:44.86] A major love
[00:47.39] And this is our
[00:49.02] Message to you (message to you)
[00:51.28] The planets are linin' up
[00:53.48] We're bringin' brighter days
[00:56.16] They're all in line
[00:57.93] Waitin' for you
[00:59.73] Can't you see?
[01:01.44] You're just another part of me
[01:04.88] Hee-hee!
[01:07.46] Ooh!
[01:11.79] A revelation
[01:13.88] Fulfill the truth
[01:16.03] The final message
[01:18.36] We'll bring to you
[01:20.50] There is no danger
[01:22.87] Fulfill the truth
[01:24.98] So come together
[01:27.31] We need you
[01:30.37] We're sendin' out
[01:32.40] A major love
[01:34.75] And this is our
[01:36.54] Message to you (message to you)
[01:38.75] The planets are linin' up
[01:41.07] We're bringin' brighter days
[01:43.47] They're all in line
[01:45.44] Waitin' for you
[01:47.07] So know the truth
[01:48.97] You're just another part of me
[01:52.78] Hee-hee!
[01:54.84] Ooh!
[01:59.24] Doo-doo-doo-doo
[02:02.17] 
[02:07.39] Ooh!
[02:09.63] 
[02:15.26] Ooh!
[02:17.39] 
[02:23.83] Hee-hee-hee!
[02:26.78] Ooh!
[02:28.99] 
[02:33.43] We're sendin' out
[02:35.76] A major love
[02:38.10] And this is our
[02:39.87] Message to you (message to you)
[02:41.94] The planets are linin' up
[02:44.36] We're bringin' brighter days
[02:46.96] They're all in line
[02:48.81] Waitin' for you
[02:50.69] Can't you see?
[02:52.23] You're just another part of me
[02:55.93] Hee-hee!
[02:58.38] Ooh!
[03:02.12] Another part of me
[03:04.84] 
[03:07.33] Ooh!
[03:11.64] We're takin' over, hee-hee!
[03:13.89] 
[03:17.03] Ooh!
[03:20.59] This is the truth, baby, hee!
[03:24.71] 
[03:29.09] Another part of me
[03:33.36] 
[03:38.69] Ooh!
[03:39.10] `
        },
        {
            number: 7,
            title: "Man in the Mirror",
            duration: "5:18",
            composers: ["Siedah Garrett", "Glen Ballard"],
            audio: "audio/07.flac",
            lyrics: `[00:11.17] I'm gonna make a change
[00:13.02] For once in my life
[00:18.63] It's gonna feel real good
[00:21.04] Gonna make a difference
[00:22.53] Gonna make it right
[00:28.39] As I, turn up the collar on
[00:31.59] My favorite winter coat
[00:34.29] This wind is blowin' my mind
[00:38.17] I see the kids in the street
[00:40.46] With not enough to eat
[00:42.53] Who am I, to be blind pretending not to see their needs?
[00:48.54] A summer's disregard
[00:51.04] A broken bottle top
[00:53.62] And a one man's soul
[00:57.57] They follow each other on the wind ya know
[01:02.08] 'Cause they got nowhere to go
[01:05.30] That's why I want you to know
[01:08.04] I'm starting with the man in the mirror
[01:12.50] I'm asking him to change his ways
[01:16.07] And no message could've been any clearer
[01:21.16] If they wanna make the world a better place
[01:23.57] Take a look at yourself and then make a change
[01:28.39] 
[01:36.47] I've been a victim of a selfish kind of love
[01:41.13] It's time that I realize
[01:44.90] That there are some with no home
[01:47.63] Not a nickel to loan
[01:49.50] Could it be really me pretending that they're not alone?
[01:55.32] A willow deeply scarred
[01:57.63] Somebody's broken heart
[02:00.34] And a washed out dream (washed out dream)
[02:04.74] They follow the pattern of the wind, ya see
[02:09.01] 'Cause they got no place to be
[02:12.06] That's why I'm starting with me
[02:14.99] I'm starting with the man in the mirror (oh)
[02:19.66] I'm asking him to change his ways (oh)
[02:24.09] And no message could've been any clearer
[02:28.17] If you wanna make the world a better place
[02:30.55] Take a look at yourself and then make a change
[02:34.18] I'm starting with the man in the mirror (oh)
[02:38.94] I'm asking him to change his ways (oh)
[02:43.32] And no message could've been any clearer
[02:47.52] If you wanna make the world a better place
[02:49.98] Take a look at yourself and then make that
[02:52.47] Change
[02:53.24] I'm starting with the man in the mirror (oh yeah)
[02:58.06] I'm asking him to change his ways (better change)
[03:02.75] No message could've been any clearer
[03:06.64] (If you wanna make the world a better place)
[03:09.10] (Take a look at yourself and then make the change)
[03:11.16] (You gotta get it right, while you got the time)
[03:13.81] ('Cause when you close your heart) you can't
[03:15.17] (Then you close your) close your, your mind
[03:18.33] With the man in the mirror, oh yeah
[03:22.18] I'm asking him to change his ways (better change)
[03:26.71] No message could've been any clearer
[03:30.44] If you wanna make the world a better place
[03:32.92] Take a look at yourself and then make a change
[03:37.94] 
[03:44.41] (Oh yeah) gonna feel real good now
[03:47.53] 
[03:54.96] I'm gonna make a change
[03:58.36] It's gonna feel real good
[04:00.25] Come on (change)
[04:03.41] Just lift yourself
[04:05.37] You know
[04:07.12] You've got to stop it
[04:08.99] Yourself (yeah)
[04:11.33] (Make that change)
[04:12.92] I've got to make that change today
[04:16.37] (Man in the mirror) you got to
[04:19.20] You got to not let yourself brother
[04:24.20] (Yeah) you know
[04:25.81] (Make that change) I've got to get that man, that man
[04:30.72] You've got to
[04:31.92] You've got to move
[04:33.71] Come on
[04:34.99] Come on
[04:36.76] You got to
[04:38.16] Stand up, stand up (yeah, make that change)
[04:40.54] Stand up
[04:41.82] Stand up and lift
[04:43.67] Yourself, now
[04:45.11] (Man in the mirror)
[04:48.56] 
[04:52.62] (Yeah, make that change)
[04:56.14] Gonna make that change come on
[04:59.34] (Man in the mirror)
[05:01.22] You know it
[05:02.35] You know it
[05:03.78] You know it
[05:04.83] You know
[05:07.66] Change
[05:10.95] Make that change
[05:11.55] `
        },
        {
            number: 8,
            title: "I Just Can't Stop Loving You (com Siedah Garrett)",
            duration: "4:13",
            composers: ["Michael Jackson"],
            audio: "audio/08.flac",
            lyrics: `[00:33.47] Each time the wind blows
[00:36.24] I hear your voice so
[00:39.06] I call your name
[00:43.06] Whispers at morning
[00:45.01] Our love is dawning
[00:48.09] Heaven's glad you came
[00:52.03] You know how I feel
[00:55.02] This thing can't go wrong
[00:58.07] I'm so proud to say i love you
[01:02.02] Your love's got me high
[01:05.03] I long to get by
[01:07.04] This time is forever
[01:09.03] Love is the answer
[01:12.09] I hear your voice now
[01:14.09] You are my choice now
[01:17.09] The love you bring
[01:21.06] Heaven's in my heart
[01:24.06] At your call
[01:25.03] I hear harps
[01:27.04] And angels sing
[01:31.04] You know how I feel
[01:33.02] This thing can't go wrong
[01:36.07] I can't live my life
[01:37.08] Without you
[01:40.00] I just can't hold on
[01:43.04] I feel we belong
[01:45.00] My life ain't worth living
[01:48.07] If I can't be with you
[01:50.06] I just can't stop loving you
[01:55.07] I just can't stop loving you
[02:00.07] And if i stop
[02:02.03] Then tell me just what
[02:04.00] Will I do
[02:07.03] 'Cause I just can't stop loving you
[02:14.00] At night when the
[02:16.02] Stars shine
[02:17.03] I pray in you I'll find
[02:19.04] A love so true
[02:23.04] When morning awakes me
[02:26.01] Will you come and take me
[02:29.06] I'll wait for you
[02:33.08] You know how i feel
[02:35.06] I won't stop until
[02:38.09] I hear your voice saying "I do"
[02:41.07] "I do"
[02:43.05] This thing can't go wrong
[02:45.08] This feeling's so strong
[02:47.04] Well, my life ain't
[02:49.02] Worth living
[02:50.02] If i can't be with you
[02:53.08] I just can't stop loving you
[02:58.07] I just can't stop loving you
[03:02.04] And if I stop
[03:04.06] Then tell me, just what will I do
[03:09.05] I just can't stop loving you
[03:13.04] We can change all the world tomorrow
[03:18.00] We can sing songs of yesterday
[03:23.06] I can say, hey
[03:25.01] Farewell To sorrow
[03:27.07] This is my life and I
[03:30.03] Want to see you for always
[03:33.08] I just can't stop loving you
[03:37.01] No, baby
[03:38.04] Oh!
[03:39.02] I just can't stop loving you
[03:42.01] If I can't stop!
[03:43.06] And if I stop
[03:45.06] Oh! Oh! Oh, Oh
[03:46.05] What will I do? Uh . . .Ooh . . .
[03:49.01] (Then tell me, just what will I do)
[03:53.07] I just can't stop loving you
[03:54.02] I do Girl!
[03:56.09] I just can't stop loving you
[03:58.03] You know I do
[04:00.02] And if I stop
[04:02.07] Then tell me, just what will I do
[04:05.09] I just can't stop loving you...
[04:07.00] `
        },
        {
            number: 9,
            title: "Dirty Diana",
            duration: "4:40",
            composers: ["Michael Jackson"],
            audio: "audio/09.flac",
            lyrics: `[00:16.71] Oh, no
[00:19.05] 
[00:27.43] Oh, no
[00:29.42] Oh, no
[00:30.31] You'll never make me stay
[00:32.48] So take your weight off of me
[00:33.81] I know your every move
[00:35.76] So won't you just let me be
[00:37.36] I've been here times before
[00:39.46] But I was too blind to see
[00:41.15] That you seduce every man
[00:42.88] This time you won't seduce me
[00:44.82] She's saying, "That's okay
[00:46.72] Hey, baby, do what you please
[00:48.24] I have the stuff that you want
[00:49.98] I am the thing that you need
[00:52.13] She looked me deep in the eyes
[00:54.11] She touchin' me so to start
[00:55.63] She says there's no turnin' back"
[00:57.63] She trapped me in her heart
[00:59.39] Dirty Diana, nah
[01:03.07] Dirty Diana, nah
[01:06.86] Dirty Diana, no
[01:10.79] Dirty Diana
[01:12.74] Let me be
[01:15.58] Oh, no
[01:18.37] Oh, no
[01:21.26] Oh, no
[01:24.56] 
[01:28.93] She likes the boys in the bands
[01:30.56] She knows when they come to town
[01:32.44] Every musician's fan, after the curtain comes down
[01:35.80] She waits at backstage doors, for those who have prestige
[01:39.26] Who promise fortune and fame, a life that's so carefree
[01:43.08] She's saying, "That's okay
[01:45.01] Hey, baby, do what you want
[01:46.98] I'll be your night lovin' thing
[01:48.76] I'll be the freak you can taunt
[01:50.51] I don't care what you say
[01:52.53] I wanna go too far
[01:54.12] I'll be your everything
[01:56.07] If you make me a star"
[01:57.99] Dirty Diana, nah
[02:01.89] Dirty Diana, nah
[02:05.29] Dirty Diana, no
[02:08.63] Dirty Diana
[02:12.84] Dirty Diana, nah
[02:16.29] Dirty Diana, nah
[02:20.06] Dirty Diana, no
[02:23.44] Dirty Diana
[02:26.80] Diana
[02:30.69] Diana
[02:34.42] Dirty Diana
[02:37.79] It's Dia-aa-aa... come on
[02:44.45] 
[02:56.46] She said, "I have to go home
[02:58.03] 'Cause I'm real tired you see
[03:00.01] Now I hate sleepin' alone
[03:02.02] Why don't you come with me?"
[03:03.99] I said, "My baby's at home
[03:05.78] She's probably worried tonight
[03:07.25] I didn't call on the phone
[03:09.25] To say that I'm alright"
[03:10.72] Diana walked up to me
[03:12.56] She said, "I'm all yours tonight"
[03:14.30] And then I ran to the phone
[03:16.59] Sayin', "Baby I'm alright"
[03:18.46] I said, "But unlock the door"
[03:20.28] 'Cause I forgot the key
[03:22.05] She said, "He's not coming back
[03:23.58] Because he's sleeping with me"
[03:25.72] Dirty Diana, nah
[03:29.65] Dirty Diana, nah
[03:33.07] Dirty Diana, nah
[03:36.72] Dirty Diana, no
[03:40.66] Dirty Diana, nah
[03:43.96] Dirty Diana, nah
[03:48.64] Dirty Diana, nah
[03:51.88] Dirty Diana
[03:55.64] Come on!
[03:59.59] Come on!
[04:02.93] Come on!
[04:06.75] Come on!
[04:10.19] Come on!
[04:14.05] Come on!
[04:16.83] Come on!
[04:20.54] Come on!
[04:24.38] Come on!
[04:28.15] Come on!
[04:30.75] Come on!
[04:33.77] Come on!
[04:34.46] `
        },
        {
            number: 10,
            title: "Smooth Criminal",
            duration: "4:17",
            composers: ["Michael Jackson"],
            audio: "audio/10.flac",
            lyrics: `[00:14.50] Ow
[00:22.64] Cha
[00:25.72] Shoo-ca-choo-ca
[00:31.27] As he came into the window was a sound of a crescendo
[00:35.31] He came into her apartment, he left the bloodstains on the carpet
[00:39.33] She ran underneath the table, he could see she was unable
[00:43.42] So she ran into the bedroom, she was struck down, it was her doom
[00:47.33] Annie, are you okay?
[00:48.41] So, Annie, are you okay? Are you okay, Annie?
[00:51.34] Annie, are you okay?
[00:52.58] So, Annie, are you okay? Are you okay, Annie?
[00:55.30] Annie, are you okay?
[00:56.58] So, Annie, are you okay? Are you okay, Annie?
[00:59.48] Annie, are you okay?
[01:00.75] So, Annie, are you okay? Are you okay, Annie?
[01:04.04] Annie, are you okay?
[01:05.29] Will you tell us that you're okay?
[01:07.75] There's a sound at the window
[01:09.32] Then he struck you, a crescendo, Annie
[01:11.89] He came into your apartment
[01:13.35] Left the bloodstains on the carpet
[01:15.82] And then you ran into the bedroom
[01:17.42] You were struck down, it was your doom
[01:19.74] Annie, are you okay?
[01:20.98] So, Annie, are you okay? Are you okay, Annie?
[01:23.74] Annie, are you okay?
[01:24.98] So, Annie, are you okay? Are you okay, Annie?
[01:27.84] Annie, are you okay?
[01:29.04] So, Annie, are you okay? Are you okay, Annie?
[01:31.89] You've been hit by
[01:33.49] You've been hit by a smooth criminal
[01:39.85] Ow
[01:44.24] So they came into the out way
[01:45.91] It was Sunday, what a black day
[01:48.33] Mouth-to-mouth resuscitation
[01:49.86] Soundin' heartbeats, intimidations
[01:52.25] Annie, are you okay?
[01:53.45] So, Annie, are you okay? Are you okay, Annie?
[01:56.30] Annie, are you okay? (Annie, are you okay?)
[01:57.56] So, Annie, are you okay? (Annie, are you okay?)
[01:59.10] Are you okay, Annie?
[02:00.29] Annie, are you okay? (Annie, are you okay?)
[02:01.76] So, Annie, are you okay? (Annie, are you okay?)
[02:03.28] Are you okay, Annie?
[02:04.47] Annie, are you okay?
[02:05.52] So, Annie, are you okay? Are you okay, Annie?
[02:09.02] Annie, are you okay?
[02:10.27] Will you tell us that you're okay?
[02:12.67] There's a sound at the window
[02:14.34] Then he struck you, a crescendo Annie
[02:16.86] He came into your apartment
[02:18.12] Left the bloodstains on the carpet
[02:20.86] Then you ran into the bedroom
[02:22.49] You were struck down, it was your doom
[02:24.66] Annie, are you okay? So, Annie, are you okay?
[02:27.45] Are you okay, Annie?
[02:28.93] You've been hit by
[02:30.34] You've been struck by a smooth criminal
[02:36.70] Ow
[02:44.88] Okay, I want everybody to clear the area right now
[02:48.94] Ow
[02:52.29] Hoo, hoo
[02:58.33] Hoo
[03:04.08] Ah, ow
[03:05.81] Annie, are you okay? (I don't know)
[03:07.16] Will you tell us, that you're okay? (I don't know)
[03:09.55] There's a sound at the window (I don't know)
[03:11.16] Then he struck you, a crescendo Annie (I don't know)
[03:13.62] He came into your apartment (I don't know)
[03:15.15] Left the bloodstains on the carpet (I don't know why, baby)
[03:17.63] And then you ran into the bedroom (help me)
[03:19.12] You were struck down, it was your doom, Annie (dag gone it)
[03:22.04] Annie, are you okay? (Dag gone it, baby)
[03:23.30] Will you tell us that you're okay? (Dag gone it, baby)
[03:25.80] There's a sound at the window (dag gone it, baby)
[03:27.31] Then he struck you, a crescendo Annie (ooh, ooh)
[03:29.92] He came into your apartment (dag gone it)
[03:31.43] Left the bloodstains on the carpet (hoo, hoo, hoo)
[03:33.89] And then you ran into the bedroom
[03:35.48] You were struck down (dag gone it), it was your doom Annie
[03:37.67] Ow, ow
[03:49.45] Ow
[03:52.40] Shoo-cha-choo, shoo-cha-choo, ow
[03:55.33] `
        },
        {
            number: 11,
            title: "Leave Me Alone",
            duration: "4:40",
            composers: ["Michael Jackson"],
            audio: "audio/11.flac",
            lyrics: `[00:08.02] Aaow
[00:10.43] 
[00:15.12] Hoo-hoo
[00:18.27] 
[00:24.35] I don't care what you talkin' bout, baby
[00:28.22] I don't care what you say
[00:31.96] Don't you come walkin' beggin' back mama
[00:35.71] I don't care anyway
[00:39.59] Time after time I gave you all of my money
[00:43.75] No excuses to make
[00:47.58] Ain't no mountain that I can't climb, baby
[00:51.69] All is going my way
[00:54.35] ('Cause there's a time when you're right)
[00:56.34] (And you know you must fight)
[00:58.44] Who's laughing, baby?
[01:00.64] Don't you know
[01:02.54] (And there's the choice that we make)
[01:04.18] (And this choice you will take)
[01:06.34] Who's laughin', baby?
[01:08.51] So just leave me alone
[01:10.67] (Leave me alone, leave me alone)
[01:13.52] Leave me alone
[01:17.42] Leave me alone
[01:18.84] (Leave me alone, leave me alone, leave me alone)
[01:21.66] Leave me alone
[01:23.37] Stop it
[01:24.29] Just stop doggin' me around
[01:28.54] 
[01:34.08] There was a time I used to say, "Girl, I need you"
[01:38.22] But who is sorry now?
[01:42.02] You really hurt, you used to take and deceive me
[01:45.78] Now who is sorry now?
[01:49.78] You got a way of making me feel so sorry
[01:53.50] I found out right away
[01:57.40] Don't you come walkin' beggin' I ain't lovin' you
[02:01.36] Don't you get in my way
[02:04.43] ('Cause there's a time when you're right)
[02:06.16] (And you know you must fight)
[02:08.42] Who's laughing, baby?
[02:10.66] Don't you know
[02:12.45] (And there's the choice that we make)
[02:14.38] (And this choice you will take)
[02:16.07] Who's laughin', baby?
[02:18.26] So just leave me alone
[02:20.57] (Leave me alone, leave me alone)
[02:23.26] Leave me alone
[02:27.12] Leave me alone
[02:28.51] (Leave me alone, leave me alone, leave me alone)
[02:31.45] Leave me alone
[02:33.15] Stop it
[02:34.38] Just stop doggin' me around
[02:38.25] 
[03:06.45] ('Cause there's a time when youre right)
[03:08.79] (And you know you must fight)
[03:10.32] Who's laughing, baby?
[03:12.58] Don't you know
[03:14.93] (And there's the choice that we make)
[03:16.28] (And this choice you will take)
[03:18.15] Who's laughin', baby?
[03:20.73] So just leave me alone
[03:23.07] (Leave me alone, leave me alone)
[03:25.57] Leave me alone
[03:29.45] Leave me alone
[03:31.26] (Leave me alone, leave me alone, leave me alone)
[03:33.76] Leave me alone
[03:35.75] Stop it
[03:36.46] Just stop doggin' me around
[03:38.02] (Leave me alone, leave me alone)
[03:40.69] Leave me alone
[03:45.13] Leave me alone
[03:46.95] (Leave me alone, leave me alone, leave me alone)
[03:49.34] Leave me alone
[03:50.98] Stop it
[03:51.93] Just stop doggin' me around
[03:56.28] 
[04:00.92] Don't come beggin' me
[04:02.84] Don't come beggin'
[04:04.60] Don't come lovin' me
[04:06.68] Don't come beggin'
[04:08.57] I love you
[04:10.72] I don't want it
[04:12.43] I don't
[04:13.42] I don't
[04:14.41] I don't
[04:15.39] I, I, I, I
[04:17.02] Aaow
[04:19.18] 
[04:24.13] Don't come beggin' me
[04:26.17] Don't come beggin'
[04:28.15] Don't come lovin' me
[04:30.13] Don't come beggin'
[04:32.13] I love you
[04:34.09] I don't want it
[04:35.79] I don't need it
[04:37.50] I don't
[04:37.83] `
        }
    ]
};
