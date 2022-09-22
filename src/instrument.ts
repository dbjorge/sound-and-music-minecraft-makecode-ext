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
     * An instrument that can be played on a Minecraft note block
     * @param instrument the instrument name
     */
    //% group="Notes" weight=50 blockGap=8
    //% blockId=instrument block="$instrument"
    //% shim=TD_ID
    export function instrument(instrument: Instrument): Instrument {
        return instrument;
    }

    /**
     * Gets the Minecraft ID string representing an instrument.
     * @param instrument the instrument
     */
    export function _instrumentMinecraftId(instrument: Instrument): string {
        switch (instrument) {
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

        throw `unrecognized instrument ${instrument}`;
    }
}
