from django.db import models

class Note(models.Model):
    default_auto_field = 'django.db.models.BigAutoField'
    body = models.TextField(null=True, blank=True)
    updated = models.DateTimeField(auto_now=True) # auto_now for updated
    created = models.DateTimeField(auto_now_add=True) # auto_now_add for created

    def __str__(self):
        return self.body[0:50]

class Filter(models.Model):
    filterStrategicStop = models.BooleanField(default=True)
    filterCandlestickPattern = models.BooleanField(default=True)
    filterIndexValue = models.BooleanField(default=True)
    filterIndexTrend = models.BooleanField(default=True)
    filterBuy = models.BooleanField(default=True)
    filterSell = models.BooleanField(default=True)
    filterWait = models.BooleanField(default=True)
    
class StrategyCard(models.Model):
    title = models.CharField(max_length=200, default='empty title')
    strategyType = models.CharField(max_length=200, default='empty strategyType')
    signalType = models.CharField(max_length=200, default='empty signal type')
    cover = models.CharField(max_length=200, default='empty cover')
    footnote = models.CharField(max_length=200, default='empty footnote')
    explanation = models.CharField(max_length=2000, default='empty explanation')
    # is_fulfilled = models.BooleanField(default=False)
    def __str__(self):
        return self.title

class StrategyDeck(models.Model):
    title = models.CharField(max_length=200)
    strategies = models.ManyToManyField(StrategyCard, related_name='deck_strategies', blank=True)
    def __str__(self):
        return self.title


class Series(models.Model):
    # investor = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    # adopted_deck = models.ForeignKey(StrategyDeck, on_delete=models.PROTECT, null=True)
    title = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)
    strategies = models.ManyToManyField(StrategyCard, related_name='strategy_series', blank=True)
    note = models.CharField(max_length=1000)

    def __str__(self):
        return self.title


class Transaction(models.Model):
    # transaction_series = models.ForeignKey(Series, on_delete=models.SET_NULL, null=True)
    fulfilled_strategies = models.ManyToManyField(StrategyCard, related_name='fulfilled_series', blank=True)
    note = models.CharField(max_length=1000)
    class Meta:
        pass
        # ordering = ['-updated', '-created', 'like_count', 'message_count']
    def __str__(self):
        return self.note