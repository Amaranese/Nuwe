{{! template for the pricing table.}}
<div class="price-chart-wrapper">
    <table class="price-chart {{theme}} buttonLocation-{{location}}">
        <tr class="name">
            {{#plans_each}}
                <td class="cell">{name_{{plans_index}}:text default="Name #{{plans_index}}"}</td>
            {{/plans_each}}
        </tr>

        <tr class="price">
            {{#plans_each}}
                <td class="cell">{price_{{plans_index}}:text default="10"}</td>
            {{/plans_each}}
        </tr>

        <tr class="rate">
            {{#plans_each}}
                <td class="cell">{rate_{{plans_index}}:text default="per unit"}</td>
            {{/plans_each}}
        </tr>

        <tr class="buttons-middle">
            {{#plans_each}}
                <td class="cell">{buttonText_middle_{{plans_index}}:button align="center"}</td>
            {{/plans_each}}
        </tr>

    {{#features_each}}
        <tr class="metric">
            {{#plans_each}}
                <td class="cell">{metric_{{plans_index}}_{{features_index}}:text default="Metric #{{features_index}}"}</td>
            {{/plans_each}}
        </tr>
    {{/features_each}}

        <tr class="buttons-bottom">
            {{#plans_each}}
                <td class="cell">{buttonText_bottom_{{plans_index}}:button align="center"}</td>
            {{/plans_each}}
        </tr>
    </table>
</div>