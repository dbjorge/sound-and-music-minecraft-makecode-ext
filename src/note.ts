// Taken from pxt-microbit /libs/core/music.ts,
// but limited to Minecraft's note range (F#3 - F#5)
//
// This needs to map to frequency and not minecraft pitch
// for compatibility with the "note" field editor
enum Note {
    //% blockIdentity=music.noteFrequency enumval=262
    C = 262,
    //% block=C#
    //% blockIdentity=music.noteFrequency enumval=277
    CSharp = 277,
    //% blockIdentity=music.noteFrequency enumval=294
    D = 294,
    //% blockIdentity=music.noteFrequency enumval=311
    Eb = 311,
    //% blockIdentity=music.noteFrequency enumval=330
    E = 330,
    //% blockIdentity=music.noteFrequency enumval=349
    F = 349,
    //% block=F#
    //% blockIdentity=music.noteFrequency enumval=370
    FSharp = 370,
    //% blockIdentity=music.noteFrequency enumval=392
    G = 392,
    //% block=G#
    //% blockIdentity=music.noteFrequency enumval=415
    GSharp = 415,
    //% blockIdentity=music.noteFrequency enumval=440
    A = 440,
    //% blockIdentity=music.noteFrequency enumval=466
    Bb = 466,
    //% blockIdentity=music.noteFrequency enumval=494
    B = 494,

    //% block=F#3
    //% blockIdentity=music.noteFrequency enumval=185
    FSharp3 = 185,
    //% blockIdentity=music.noteFrequency enumval=196
    G3 = 196,
    //% block=G#3
    //% blockIdentity=music.noteFrequency enumval=208
    GSharp3 = 208,
    //% blockIdentity=music.noteFrequency enumval=220
    A3 = 220,
    //% blockIdentity=music.noteFrequency enumval=233
    Bb3 = 233,
    //% blockIdentity=music.noteFrequency enumval=247
    B3 = 247,
    //% blockIdentity=music.noteFrequency enumval=262
    C4 = 262,
    //% block=C#4
    //% blockIdentity=music.noteFrequency enumval=277
    CSharp4 = 277,
    //% blockIdentity=music.noteFrequency enumval=294
    D4 = 294,
    //% blockIdentity=music.noteFrequency enumval=311
    Eb4 = 311,
    //% blockIdentity=music.noteFrequency enumval=330
    E4 = 330,
    //% blockIdentity=music.noteFrequency enumval=349
    F4 = 349,
    //% block=F#4
    //% blockIdentity=music.noteFrequency enumval=370
    FSharp4 = 370,
    //% blockIdentity=music.noteFrequency enumval=392
    G4 = 392,
    //% block=G#4
    //% blockIdentity=music.noteFrequency enumval=415
    GSharp4 = 415,
    //% blockIdentity=music.noteFrequency enumval=440
    A4 = 440,
    //% blockIdentity=music.noteFrequency enumval=466
    Bb4 = 466,
    //% blockIdentity=music.noteFrequency enumval=494
    B4 = 494,
    //% blockIdentity=music.noteFrequency enumval=523
    C5 = 523,
    //% block=C#5
    //% blockIdentity=music.noteFrequency enumval=555
    CSharp5 = 555,
    //% blockIdentity=music.noteFrequency enumval=587
    D5 = 587,
    //% blockIdentity=music.noteFrequency enumval=622
    Eb5 = 622,
    //% blockIdentity=music.noteFrequency enumval=659
    E5 = 659,
    //% blockIdentity=music.noteFrequency enumval=698
    F5 = 698,
    //% block=F#5
    //% blockIdentity=music.noteFrequency enumval=740
    FSharp5 = 740,
}

namespace music {
    /**
     * Plays a note similar to a Minecraft note block.
     * @param note pitch of the tone to play in Hertz (Hz), eg: Note.C
     * @param instrument instrument to play the note as
     */
    //% weight=90
    //% blockId=music_play_note block="play|note $note=note_pitch|on $instrument" blockGap=8
    //% parts="headphone"
    //% useEnumVal=1
    //% group="Notes"
    //% note.defl="262"
    //% instrument.defl=Instrument.Harp
    export function playNote(note: Note, instrument: Instrument): void {
        const soundId: string = instrumentId(instrument);
        const pitch: string = frequencyToMinecraftPitch(note);
        player.execute(`playsound ${soundId} @a ~ ~ ~ ${music.volumeInGameUnits} ${pitch}`)
    }

    /**
     * Gets the frequency of a note in Hertz.
     * @param name the note name
     */
    //% weight=50 help=music/note-frequency
    //% blockId=note_frequency block="%name"
    //% shim=TD_ID color="#FFFFFF" colorSecondary="#FFFFFF"
    //% name.fieldEditor="note" name.defl="262"
    //% name.fieldOptions.decompileLiterals=true
    //% useEnumVal=1
    //% group="Notes"
    //% blockGap=8
    export function noteFrequency(name: Note): number {
        return name;
    }

    export function frequencyToMinecraftPitch(frequencyHz: number): string {
        // The minecraft note scale runs from F#3 (pitch .5) to F#5 (pitch 2.0).
        const pitch = Math.map(frequencyHz, 185, 740, .5, 2.0);
        return formatFloatForMinecraftCommand(pitch);
    }

    // This is just number.toFixed(3)
    function formatFloatForMinecraftCommand(input: number): string {
        const thousandths = Math.round(input * 1000);
        return `${Math.floor(thousandths / 1000)}.${thousandths % 1000}`;
    }
}
