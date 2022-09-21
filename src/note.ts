declare const enum Note {
    C = "0.707",
    //% block=C#
    CSharp = "0.749",
    D = "0.794",
    Eb = "0.841",
    E = "0.891",
    F = "0.944",
    //% block=F#
    FSharp = "1.000",
    G = "1.059",
    //% block=G#
    GSharp = "1.122",
    A = "1.189",
    Bb = "1.260",
    B = "1.335",

    //% block=F#3
    FSharp3 = "0.500",
    G3 = "0.530",
    //% block=G#3
    GSharp3 = "0.561",
    A3 = "0.595",
    Bb3 = "0.630",
    B3 = "0.667",
    C4 = C,
    //% block=C#4
    CSharp4 = CSharp,
    D4 = D,
    Eb4 = Eb,
    E4 = E,
    F4 = F,
    //% block=F#4
    FSharp4 = FSharp,
    G4 = G,
    //% block=G#4
    GSharp4 = GSharp,
    A4 = A,
    Bb4 = Bb,
    B4 = B,
    C5 = "1.414",
    //% block=C#5
    CSharp5 = "1.498",
    D5 = "1.587",
    Eb5 = "1.682",
    E5 = "1.782",
    F5 = "1.888",
    //% block=F#5
    FSharp5 = "2.000",
}

/**
 * Minecraft instrument types that a note block can emit
 */
declare const enum Instrument {
    //% jres alias=PLANKS_OAK
    Bass = "note.bass",
    //% block="Snare Drum"
    //% jres alias=SAND
    SnareDrum = "note.snare",
    // glass
    //% block="Hi-hat"
    HiHat = "note.hat",
    // stone
    //% block="Bass Drum"
    BassDrum = "note.bd",
    // gold block
    Bell = "note.bell",
    // clay
    Flute = "note.flute",
    // packed ice
    Chime = "note.chime",
    // wool
    Guitar = "note.guitar",
    // bone block
    Xylophone = "note.xylophone",
    // iron block
    Vibraphone = "note.iron_xylophone",
    // soul sand
    //% block="Cow Bell"
    CowBell = "note.cow_bell",
    // pumpkin
    Didgeridoo = "note.didgeridoo",
    // emerald block
    Bit = "note.bit",
    // hay bale
    Banjo = "note.banjo",
    // glowstone
    Pling = "note.pling",
    // default
    Harp = "note.harp",   
}

namespace music {
    /**
     * Plays a note similar to a Minecraft note block.
     * @param note pitch of the tone to play in Hertz (Hz), eg: Note.C
     * @param instrument instrument to play the note as
     * 
     * @param ms tone duration in milliseconds (ms)
     */
    //% help=music/play-note weight=90
    //% blockId=music_play_note block="play|note $note=note_pitch|on $instrument" blockGap=8
    //% parts="headphone"
    //% useEnumVal=1
    //% group="Notes"
    //% note.defl="1.414"
    //% instrument.defl=Instrument.Harp
    export function playNote(note: Note, instrument: Instrument): void {
        const soundId = instrument.toString();
        const pitch = note.toString();
        player.execute(`playsound ${soundId} @a ~ ~ ~ ${music.volumeInGameUnits} ${pitch}`)
    }

    /**
     * Gets the pitch of a note.
     * @param name the note name
     */
    //% weight=50 help=music/note-pitch
    //% blockId=note_pitch block="%name"
    //% shim=TD_ID color="#FFFFFF" colorSecondary="#FFFFFF"
    //% name.fieldEditor="note" name.defl="1.414"
    //% name.fieldOptions.decompileLiterals=true
    //% useEnumVal=1
    //% group="Tone"
    //% blockGap=8
    export function notePitch(name: Note): string {
        return name;
    }
}
