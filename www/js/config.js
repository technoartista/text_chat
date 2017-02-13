var QBApp = {
    appId: 53667,
    authKey: 'S2PGNzmyCcQ9BX7',
    authSecret: 'NRa3bfUTyTeJ5t9'
};

var config = {
    chatProtocol: {
        active: 2
    },
    streamManagement: {
        enable: true
    },
    debug: {
        mode: 1,
        file: null
    },
    stickerpipe: {
        elId: 'stickers_btn',
        apiKey: '847b82c49db21ecec88c510e377b452c',
        enableEmojiTab: true,
        enableHistoryTab: true,
        enableStoreTab: true,

        userId: null,

        priceB: '0.99 $',
        priceC: '1.99 $'
    }
};

var QBUser1 = {
        id: 23969907,
        name: 'Surya Kumaran',
        login: 'suryakumaran',
        pass: 'suryakumaran123'
    },
    QBUser2 = {
        id: 23970368,
        name: 'User2',
        login: 'User2',
        pass: 'CordovaUser2'
    };

QB.init(QBApp.appId, QBApp.authKey, QBApp.authSecret, config);
