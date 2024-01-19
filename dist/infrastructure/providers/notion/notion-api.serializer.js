"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotionApiSerializer = void 0;
class NotionApiSerializer {
    static deserializeClips(clips) {
        const formattedClips = [];
        clips.map((clip) => {
            const serializedClip = {
                id: clip.id,
                name: clip.properties.client.title[0].text.content,
                type: clip.properties.type_evenement.multi_select[0].name,
            };
            formattedClips.push(serializedClip);
        });
        return formattedClips;
    }
}
exports.NotionApiSerializer = NotionApiSerializer;
//# sourceMappingURL=notion-api.serializer.js.map