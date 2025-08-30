import { ref } from 'vue';
const isOpen = ref(false);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "expandable-box" },
});
__VLS_asFunctionalElement(__VLS_elements.h3, __VLS_elements.h3)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.isOpen = !__VLS_ctx.isOpen;
            // @ts-ignore
            [isOpen, isOpen,];
        } },
    ...{ class: "box-title" },
});
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: "toggle-icon" },
});
(__VLS_ctx.isOpen ? '-' : '+');
// @ts-ignore
[isOpen,];
if (__VLS_ctx.isOpen) {
    // @ts-ignore
    [isOpen,];
    __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
        ...{ class: "box-content" },
    });
    var __VLS_0 = {};
}
/** @type {__VLS_StyleScopedClasses['expandable-box']} */ ;
/** @type {__VLS_StyleScopedClasses['box-title']} */ ;
/** @type {__VLS_StyleScopedClasses['toggle-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['box-content']} */ ;
// @ts-ignore
var __VLS_1 = __VLS_0;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        isOpen: isOpen,
    }),
});
const __VLS_component = (await import('vue')).defineComponent({});
export default {};
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ExpandableBox.vue.js.map