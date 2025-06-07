<script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from '@/components/ui/navigation-menu'

</script>

<template>
    <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuLink as-child>
          <RouterLink
            to="/"
            :class="navigationMenuTriggerStyle()">
            Home
          </RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink as-child>
          <RouterLink
            to="/pokemon"
            :class="navigationMenuTriggerStyle()">
            Get Pokemon
          </RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink as-child>
          <RouterLink
            to="/profile"
            :class="navigationMenuTriggerStyle()">
            Profile
          </RouterLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
</template>
