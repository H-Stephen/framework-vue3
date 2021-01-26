<template>
    <f7-page>
        <f7-button @click="goTo" raised fill>go about</f7-button>
        home
    </f7-page>
</template>

<script>
export default {
    props: {
        f7router: Object,
    },
    setup(props) {
        const goTo = () => {
            props.f7router.navigate('/about/');
        };
        return {
            goTo,
        };
    },
};
</script>
