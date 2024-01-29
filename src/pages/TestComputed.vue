<template>
    <div class="computedDiv" > 
        <label for="">Enter a number</label>
        <input type="text"  @keyup="isInputANum" v-model="inputTxt" /> 
         <!-- v-model="inputTxt" > -->
        <p>{{ inputTxt }}  is a number :  {{inputIsNum}}</p>
    </div>
</template>

<script> 

export default {
    data: ()=>  { 
        return{
            inputTxt: '' 
            // , inputIsNum: undefined
        }
    }, computed: {
        inputIsNum() {
            if (this.inputTxt.length < 1) {
                return undefined
            }
            return !isNaN(this.inputTxt)
        }
    }
    // , methods: {
    //     isInputANum(){ 
    //         this.inputIsNum  =  !isNaN (this.inputTxt) 
    //     }
    // }
}

</script>

<style scoped>
    .computedDiv *{
        width: 50%;
        font-size: x-large;
        font-weight: 600;
        display: inline-block;
        align-items: center;
    }
</style>