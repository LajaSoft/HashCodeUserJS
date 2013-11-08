function __sortBetter() {
        var userlink=$('#searchBar a').first().attr('href');
        $('#listA')
                .prepend(
                                $('.short-summary.tagged-interesting')
                                        .sort(sortQuestions)
                        )
                .append($('.short-summary').has('a[href="' +userlink+ '"'));

        function sortQuestions(a,b)
        {
                var $a=$(a),
                    $b=$(b);
                return  (value($a,'status')-value($b,'status')) ||
                        (value($b,'votes')-value($a,'votes'));

                function value($s,Class) {
                        return parseInt($s.find('.'+Class+' .item-count').text());
                }
        }
}
