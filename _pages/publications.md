---
layout: page
permalink: /publications/
title: papers
description: Selected papers, preprints, publications, and miscellaneous writing.
nav: true
nav_order: 2
---

<p class="post-description"><span style="color:#c1121f;">(α-β)</span> indicates alphabetical author ordering, and <span style="color:#c1121f;">*</span> indicates equal contribution.</p>

## Selected papers

<div class="publications">
{% bibliography --group_by none --query @*[selected=true]* %}
</div>

## Preprints

<div class="publications">
{% bibliography --group_by none --file preprints %}
</div>

## Publications

<div class="publications">
{% bibliography %}
</div>

## Thesis

<div class="publications">
{% bibliography --group_by none --file theses %}
</div>

## Miscellaneous

<div class="publications">
{% bibliography --group_by none --file misc %}
</div>
