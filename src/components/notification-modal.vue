<template>
  <transition name="modal" mode="out-in">
    <div
      class="relative z-10 transition all ease-in-out duration-1000"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      v-show="notifyUser"
    >
      <div
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="flex items-center sm:items-center justify-center min-h-full p-4 text-center sm:p-0"
        >
          <div
            class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
          >
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <i
                  v-if="icon === 'success'"
                  class="fa-solid fa-circle-check text-2xl text-green-500"
                ></i>
                <i
                  v-else
                  class="fa-solid fa-circle-exclamation text-2xl text-red-500"
                ></i>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    class="text-lg leading-6 font-bold text-gray-900"
                    id="modal-title"
                  >
                    {{ title }}
                  </h3>
                  <div class="mt-2">
                    <p class="text-base text-gray-500">
                      {{ msg }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"
            >
              <button
                @click="$emit('toggleModal')"
                type="submit"
                class="mt-6 w-full border border-transparent rounded-md py-3 px-8 flex items-center bg-primary hover:bg-primaryHovered justify-center text-base font-bold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    notifyUser: {
      type: Boolean,
      required: true,
      default: false,
    },
    title: {
      type: String,
      required: true,
      default: "",
    },
    msg: {
      type: String,
      required: true,
      default: "",
    },
    icon: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>

<style scoped>
.modal-enter-active {
  animation: animatedModal 0.5s ease-in-out forwards;
}
.modal-leave-active {
  animation: animatedModal 0.5s ease-in-out reverse forwards;
}
@keyframes animatedModal {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
