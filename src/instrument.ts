/**
 * Minecraft instrument types that a note block can emit
 */
declare const enum Instrument {
    // default
    //% jres
    Harp,
    // wood planks
    //% jres
    Bass,
    // sand
    //% block="Snare Drum"
    //% jres
    SnareDrum,
    // glass
    //% block="Hi-hat"
    //% jres
    HiHat,
    // stone
    //% block="Bass Drum"
    //% jres
    BassDrum,
    // gold block
    //% jres
    Bell,
    // clay
    //% jres
    Flute,
    // packed ice
    //% jres
    Chime,
    // wool
    //% jres
    Guitar,
    // bone block
    //% jres
    Xylophone,
    // iron block
    //% jres
    Vibraphone,
    // soul sand
    //% block="Cow Bell"
    //% jres
    CowBell,
    // pumpkin
    //% jres
    Didgeridoo,
    // emerald block
    //% jres
    Bit,
    // hay bale
    //% jres
    Banjo,
    // glowstone
    //% jres
    Pling,
}

namespace music {
    /**
     * Gets the Minecraft ID string representing an instrument.
     * @param name the instrument name
     */
    //% weight=49
    //% blockId=instrument_id block="$name"
    //% blockHidden=true
    //% shim=TD_ID color="#FFFFFF" colorSecondary="#FFFFFF"
    //% name.fieldOptions.decompileLiterals=true
    //% useEnumVal=1
    //% group="Tone"
    //% blockGap=8
    export function instrumentId(name: Instrument): string {
        switch (name) {
            case Instrument.Bass: return 'note.bass';
            case Instrument.SnareDrum: return 'note.snare';
            case Instrument.HiHat: return 'note.hat';
            case Instrument.BassDrum: return 'note.bd';
            case Instrument.Bell: return 'note.bell';
            case Instrument.Flute: return 'note.flute';
            case Instrument.Chime: return 'note.chime';
            case Instrument.Guitar: return 'note.guitar';
            case Instrument.Xylophone: return 'note.xylophone';
            case Instrument.Vibraphone: return 'note.iron_xylophone';
            case Instrument.CowBell: return 'note.cow_bell';
            case Instrument.Didgeridoo: return 'note.didgeridoo';
            case Instrument.Bit: return 'note.bit';
            case Instrument.Banjo: return 'note.banjo';
            case Instrument.Pling: return 'note.pling';
            case Instrument.Harp: return 'note.harp';
        }

        throw `unrecognized instrument ${name}`;
    }
}
