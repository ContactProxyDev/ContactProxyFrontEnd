import axios from "axios"

const SERVER_URL = 'http://37.192.52.216:1104'

export const cardsRequests = {
    edit(cardId, uid, cardFields, creationDate, viewCounter, maxViewCount, maxViewDate, url, isVisible, isOnlyAuthUsers, isOnlyWithPermission) {
        return axios({
            method: 'put',
            url: SERVER_URL + '/contact-proxy/cards/' + cardId + '/edit',
            data: {
                id: cardId,
                ownerId: uid,
                cardFields: cardFields,
                creationDate: creationDate,
                viewCounter: viewCounter,
                maxViewCount: maxViewCount,
                maxViewDate: maxViewDate,
                url: url,
                isVisible: isVisible,
                isOnlyForAuthorizedUsers: isOnlyAuthUsers,
                isOnlyWithPermission: isOnlyWithPermission
            }
        })
    },


}