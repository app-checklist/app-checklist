import CheckList from '../components/CheckList'
import Checkbox from '../components/Checkbox'
import Callout from 'nextra-theme-docs/callout'

# 📏 File size Optimization

## Why?

Smaller apps are cheaper and faster to download.
It does not take us much space on the user smartphone.

## Android

<CheckList>
    <Checkbox title="Use Android App Bundles" cb_id="aab">
        [https://developer.android.com/guide/app-bundle](https://developer.android.com/guide/app-bundle)
    </Checkbox>
    <Checkbox title="Optimize file size" cb_id="optimize">
        [Build for the next billion](https://developer.android.com/docs/quality-guidelines/build-for-billions/data-cost)
    </Checkbox>
    <Checkbox title="Remove debug symbols" cb_id="debug_symbols"/>
    <Checkbox title="Use R8" cb_id="r8"/>
    <Checkbox title="Use resolution aware images" cb_id="images"/>
    <Checkbox title="Use vector images" cb_id="vector_images"/>
</CheckList>

## iOS

<CheckList>
    <Checkbox title="Strip debug symbols" cb_id="ios_debug_symbols"/>
    <Checkbox title="Use resolution aware images" cb_id="ios_images"/>
    <Checkbox title="Use vector images" cb_id="ios_vector_images"/>
    <Checkbox title="Use bit code" cb_id="bit_code"/>
</CheckList>
