

let tempoMsPerBeat: number;
function setTempo(beatsPerMinute: number) {
    tempoMsPerBeat = 60000.0 / beatsPerMinute;
}
setTempo(120);

const PLAYSOUND_DELAY_MS = 50; // one minecraft tick
function playNote(note: string, durationInBeats: number = 1) {
    player.execute(`playsound note.harp @s ~ ~ ~ 10 ${noteToPitch(note)}`);
    if (durationInBeats > 0) {
        loops.pause(tempoMsPerBeat * durationInBeats - PLAYSOUND_DELAY_MS);
    }
}

function rest(durationInBeats: number = 1) {
    loops.pause(tempoMsPerBeat * durationInBeats);
}

function playMelody(melody: string[]) {
    for (const note of melody) {
        const noteParts = note.split(':');
        const duration = noteParts[1] ? parseFloat(noteParts[1]) : 1;
        playNote(noteParts[0], duration);
    }
}

function playSampleSong() {
    playMelody(['E4', 'E4', 'E4:2', 'E4', 'E4', 'E4:2', 'E4', 'G4', 'C4', 'D4', 'E4:4']);
}

player.onItemInteracted(JUKEBOX, function () {
	player.execute("music stop");
    loops.runInBackground(playSampleSong);
});

player.onChatCommand("metronome", [ChatArgument.number], (args) => {
    const delayMs = args.number;
    for (let i = 0; i < 40; i++) {
        playNote('C4', 0);
        loops.pause(delayMs);
    }
})

player.onChatCommand("anote", [ChatArgument.number], (args) => {
    blocks.place(blocks.blockWithData(NOTE_BLOCK, 7), positions.createLocal(0, 1, 1))

    const numClicks = args.number;
    agent.teleportToPlayer();
    for (let i = 0; i < numClicks; i++) {
        agent.interact(FORWARD);
    }
});


player.onChatCommand("timeq", [], () => {
    let tickList = [];
    for (let i = 0; i < 10; i++) {
        tickList.push(gameplay.timeQuery(TimeQuery.GameTime));
    }
    for (let i = 0; i < 10; i++) {
        player.say(`${i}: ${tickList[i]}`);
    }
    for (let i = 0; i < 10; i++) {
        const ticks = gameplay.timeQuery(TimeQuery.GameTime);
        player.say(`${i}: ${ticks}`);
    }
});