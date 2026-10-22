<template>
  <UApp>
    <!-- Inspira UI Neural Background — WebGL shader background (bottom layer) -->
    <ClientOnly>
      <InspiraUiNeuralBackground class="fixed inset-0 -z-10" />
    </ClientOnly>
    <!-- Inspira UI Fluid Cursor — WebGL fluid simulation -->
    <ClientOnly>
      <InspiraUiFluidCursor :enabled="false" class="pointer-events-none fixed inset-0 z-[9999] h-full w-full" />
    </ClientOnly>
    <NuxtLoadingIndicator color="linear-gradient(90deg, #9d78ff, #f472b6, #51e0cd)" />
    <NuxtLayout><NuxtPage /></NuxtLayout>
  </UApp>
</template>
