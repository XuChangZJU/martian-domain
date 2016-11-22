'use strict'

module.exports = {
    wordType: {
        DISPOSABLE: "DISPOSABLE",
        CONSTANT: "CONSTANT"
    },
    battery: {
        warning: 30,
        warningSevere: 20
    },
    event: {
        LOCK_LOCKED: "LOCK_LOCKED",
        LOCK_UNLOCKED: "LOCK_UNLOCKED",
        CONNECTED: "CONNECTED",
        DISCONNECTED: "DISCONNECTED",
        DOOR_OPENED: "DOOR_OPENED",
        DOOR_CLOSED: "DOOR_CLOSED",
        VERSION_GOT: "VERSION_GOT",
        PERIPHERAL_READY: "PERIPHERAL_READY",
        LOCK_WORD_GOT: "LOCK_WORD_GOT",
        KEY_WORD_VERIFIED: "KEY_WORD_VERIFIED",
        ENCRYPT_WORD_SET: "ENCRYPT_WORD_SET",
        ENCRYPT_WORD_CLEARED: "ENCRYPT_WORD_CLEARED",
    },
};
