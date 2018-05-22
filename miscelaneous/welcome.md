Welcome
======

Markdown is a simple text format which allows the writer to prepare a document which can be converted into other formats such as HTML.  In comparison to writing a document in HTML the format is relatively simple and straightforward and also provides the benefit that it can be easily read before conversion.  This form of documentation is used by sites like git hub where the Readme.md is prepared in markdown.  For more information on markdown see [Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

Illustration
------------

As a quick illustration unordered lists can be written as follows:

- this is an unordeered list
- ordered lists are just as easy
	1. This is an indented ordered list
	2. and so on.
	
Code snippets, blockquotes and images are also easily include.  

Here is a code snippet in python:

``` python

def bubbleSort(l):
    """
    An implementation of the bubble sore with optimisation
    """
    result = l[:]

    lengthData = len(result)
    sweep      = lengthData - 1

    while sweep >= 0:
        for i in range(sweep):
            if result[i] > result[i+1]:
                result[i], result[i+1] = result[i+1], result[i]
        sweep -= 1

    return result


print(bubbleSort([33, 20, 12, 31, 2, 67]))


```

And an example in C:

``` c

#include <stdio.h>

int main(void)
{
	int		a = 1;
	void	try_to_change_it(int);

	printf("%d\n", a);		/* 1 is printed */
	try_to_change_it(a);
	printf("%d\n", a);		/* 1 is printed again */

	return (0);
}

void try_to_change_it(int a)
{
	a = 777;
}

```

A block quote attributed to Albert Einstein:

> I am by heritage a Jew, by citizenship a Swiss, and by makeup a human being, and only a human being, without any special attachment to any state or national entity whatsoever.

And finally an image.

![Elephant](https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/220px-African_Bush_Elephant.jpg  'African Elephant')

This markdown previewer provides a live, instant, preview of any markdown entered.  If you would like to try it out please either alter the existing text or press the 'Clear' button.  You can easily return to this screen by pressing the 'Welcome' button.