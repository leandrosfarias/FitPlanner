import { ref } from 'vue';
import { useRouter } from 'vue-router';
const username = ref('');
const password = ref('');
const role = ref('');
const className = ref('role-option');
const styleCoach = ref('coach-option');
const styleStudent = ref('student-option');
const router = useRouter();
function handleLogin() {
    if (role.value === 'coach') {
        router.push('/dashboard/coach');
    }
    else if (role.value === 'client') {
        router.push('/dashboard/client');
    }
    console.log('Username:', username.value);
    console.log('Password:', password.value);
    console.log('Role:', role.value);
}
function selectRole(seletectedRole) {
    role.value = seletectedRole;
    console.log('Selected role:', role.value);
    if (role.value === 'coach') {
        styleCoach.value = 'coach-option-selected';
        styleStudent.value = 'student-option';
    }
    else if (role.value === 'student') {
        styleStudent.value = 'student-option-selected';
        styleCoach.value = 'coach-option';
    }
    else {
        styleCoach.value = 'coach-option';
        styleStudent.value = 'student-option';
    }
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['login-container']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-with-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['input-with-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    id: "login-page",
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "login-container" },
});
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({});
__VLS_asFunctionalElement(__VLS_elements.form, __VLS_elements.form)({
    ...{ onSubmit: (__VLS_ctx.handleLogin) },
});
// @ts-ignore
[handleLogin,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    for: "username",
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "input-with-icon" },
});
__VLS_asFunctionalElement(__VLS_elements.i, __VLS_elements.i)({
    ...{ class: "fas fa-envelope" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    type: "text",
    id: "username",
    value: (__VLS_ctx.username),
    required: true,
    placeholder: "seu.email@exemplo.com",
    ...{ class: "input" },
});
// @ts-ignore
[username,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "form-group" },
});
__VLS_asFunctionalElement(__VLS_elements.label, __VLS_elements.label)({
    for: "password",
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "input-with-icon" },
});
__VLS_asFunctionalElement(__VLS_elements.i, __VLS_elements.i)({
    ...{ class: "fas fa-lock" },
});
__VLS_asFunctionalElement(__VLS_elements.input)({
    type: "password",
    id: "password",
    required: true,
    placeholder: "********",
    ...{ class: "input" },
});
(__VLS_ctx.password);
// @ts-ignore
[password,];
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    id: "role-selection",
});
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.selectRole('coach');
            // @ts-ignore
            [selectRole,];
        } },
    ...{ class: (__VLS_ctx.className) },
    id: (__VLS_ctx.styleCoach),
});
// @ts-ignore
[className, styleCoach,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.selectRole('student');
            // @ts-ignore
            [selectRole,];
        } },
    ...{ class: (__VLS_ctx.className) },
    id: (__VLS_ctx.styleStudent),
});
// @ts-ignore
[className, styleStudent,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    id: "login-button-container",
});
__VLS_asFunctionalElement(__VLS_elements.button, __VLS_elements.button)({
    ...{ onClick: (__VLS_ctx.handleLogin) },
    type: "submit",
    id: "login-button",
});
// @ts-ignore
[handleLogin,];
/** @type {__VLS_StyleScopedClasses['login-container']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-with-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['fas']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-envelope']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
/** @type {__VLS_StyleScopedClasses['form-group']} */ ;
/** @type {__VLS_StyleScopedClasses['input-with-icon']} */ ;
/** @type {__VLS_StyleScopedClasses['fas']} */ ;
/** @type {__VLS_StyleScopedClasses['fa-lock']} */ ;
/** @type {__VLS_StyleScopedClasses['input']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup: () => ({
        username: username,
        password: password,
        className: className,
        styleCoach: styleCoach,
        styleStudent: styleStudent,
        handleLogin: handleLogin,
        selectRole: selectRole,
    }),
});
export default (await import('vue')).defineComponent({});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Login.vue.js.map