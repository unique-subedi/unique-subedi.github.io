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

- [An Elementary Evaluation of $\zeta(2n)$ Using Dirichlet's Kernel](/assets/pdf/Dirichlet_s_Kernel_and_Zeta_2n_.pdf), with Micah B. Milinovich.
- [On $L_1$-norm of Dirichlet's Kernel](/assets/pdf/L1_Norm_of_Dirichlet_s_Kernel.pdf), with Micah B. Milinovich.
